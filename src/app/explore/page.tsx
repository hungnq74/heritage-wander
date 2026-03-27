import { ExploreMapWrapper } from "@/components/explore/explore-map-wrapper";
import { HERITAGE_NODES } from "@/lib/mock-data";

export default function ExplorePage() {
  return (
    <div className="h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-3.5rem)] w-full relative">
      <ExploreMapWrapper nodes={HERITAGE_NODES} />
    </div>
  );
}
