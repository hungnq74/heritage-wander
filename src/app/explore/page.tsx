import { ExploreMapWrapper } from "@/components/explore/explore-map-wrapper";
import dbConnect from "@/lib/db";
import Heritage from "@/models/Heritage";

export const dynamic = "force-dynamic";

export default async function ExplorePage() {
  await dbConnect();
  const nodes = await Heritage.find({}).lean();
  const serializedNodes = JSON.parse(JSON.stringify(nodes));

  return (
    <div className="h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-3.5rem)] w-full relative">
      <ExploreMapWrapper nodes={serializedNodes} />
    </div>
  );
}
