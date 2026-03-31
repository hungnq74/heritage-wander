import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import UserProgress from "@/models/UserProgress";
import User from "@/models/User";
import { auth } from "@/auth";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const session = await auth();
    const { searchParams } = new URL(request.url);
    const anonymousId = searchParams.get("userId");

    // Primary ID is the session userId, fallback to anonymousId
    const userId = session?.user?.id || anonymousId;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Authentication or userId is required" },
        { status: 401 }
      );
    }

    // Migration logic: If logged in AND we have an anonymousId, merge them
    if (session?.user?.id && anonymousId && session.user.id !== anonymousId) {
      const anonProgress = await UserProgress.findOne({ userId: anonymousId });
      if (anonProgress) {
        await UserProgress.findOneAndUpdate(
          { userId: session.user.id },
          {
            $addToSet: {
              unlockedNodeIds: { $each: anonProgress.unlockedNodeIds },
              collectedItemIds: { $each: anonProgress.collectedItemIds },
              earnedBadgeIds: { $each: anonProgress.earnedBadgeIds },
            },
          },
          { upsert: true }
        );
        // Optionally delete anonymous progress after migration
        // await UserProgress.deleteOne({ userId: anonymousId });
      }
    }

    const targetUserId = session?.user?.id || userId;
    let progress = await UserProgress.findOne({ userId: targetUserId });

    if (!progress) {
      progress = await UserProgress.create({
        userId: targetUserId,
        unlockedNodeIds: [],
        collectedItemIds: [],
        earnedBadgeIds: [],
      });
      
      await User.findOneAndUpdate(
        { id: targetUserId }, 
        { id: targetUserId }, 
        { upsert: true }
      );
    }

    return NextResponse.json({ success: true, data: progress });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const session = await auth();
    const body = await request.json();
    const { userId: anonymousId, type, id } = body;

    const userId = session?.user?.id || anonymousId;

    if (!userId || !type || !id) {
      return NextResponse.json(
        { success: false, error: "Authentication or userId, type, and id are required" },
        { status: 400 }
      );
    }

    const fieldMap: Record<string, string> = {
      unlockNode: "unlockedNodeIds",
      collectItem: "collectedItemIds",
      earnBadge: "earnedBadgeIds",
    };

    const field = fieldMap[type];
    if (!field) {
      return NextResponse.json(
        { success: false, error: "Invalid update type" },
        { status: 400 }
      );
    }

    const progress = await UserProgress.findOneAndUpdate(
      { userId },
      { $addToSet: { [field]: id } },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, data: progress });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
