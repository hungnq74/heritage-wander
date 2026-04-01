import { ExploreMapWrapper } from "@/components/explore/explore-map-wrapper";
import dbConnect from "@/lib/db";
import Heritage from "@/models/Heritage";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function ExplorePage() {
  await dbConnect();
  const nodes = await Heritage.find({}).lean();
  const serializedNodes = JSON.parse(JSON.stringify(nodes));

  return (
    <div className="h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-3.5rem)] w-full relative">
      <Suspense fallback={<div className="h-full w-full flex items-center justify-center bg-background">Loading map...</div>}>
        <ExploreMapWrapper nodes={serializedNodes} />
      </Suspense>
    </div>
  );
}
