import { FogOfWarMap } from "@/components/map/fog-of-war-map";
import { HERITAGE_NODES } from "@/lib/mock-data";

export default function ExplorePage() {
  return (
    <div className="h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-3.5rem)] w-full relative">
      <FogOfWarMap nodes={HERITAGE_NODES} />
    </div>
  );
}
