import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Heritage from "@/models/Heritage";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const cityId = searchParams.get("cityId");

    const query = cityId ? { cityId } : {};
    const heritages = await Heritage.find(query).sort({ tier: 1 });

    return NextResponse.json({ success: true, data: heritages });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
