"use client";

import { GeolocationGate } from "./geolocation-gate";
import { FogOfWarMap } from "@/components/map/fog-of-war-map";
import type { HeritageNode } from "@/lib/types";

interface ExploreMapWrapperProps {
  nodes: HeritageNode[];
}

export function ExploreMapWrapper({ nodes }: ExploreMapWrapperProps) {
  return (
    <GeolocationGate>
      {(position) => <FogOfWarMap nodes={nodes} gpsPosition={position} />}
    </GeolocationGate>
  );
}
