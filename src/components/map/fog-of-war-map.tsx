"use client";

import { useState, useCallback, useEffect } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
import type { MapMouseEvent } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import type { HeritageNode } from "@/lib/types";
import { MistNodeMarker } from "./mist-node-marker";
import { ProximityHud } from "./proximity-hud";
import { getMuseumState } from "@/lib/museum-store";
import type { GeoJSON } from "geojson";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Vietnam center — shows full country at zoom 5.5
const VIETNAM_CENTER: [number, number] = [106.6297, 16.4637];

// Distance in degrees (approx 300m at this latitude)
const PROXIMITY_DEGREES = 0.003;

// Build fog GeoJSON: large bounding box with holes for each unlocked node
function buildFogGeoJSON(nodes: HeritageNode[], unlockedIds: string[], zoom: number): GeoJSON.Feature<GeoJSON.Polygon> {
  const outerRing: GeoJSON.Position[] = [
    [-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90],
  ];

  // Zoom-adaptive reveal radius: larger at national view, precise at local view
  const r = zoom < 8 ? 0.05 : 0.012;

  const holes: GeoJSON.Position[][] = unlockedIds.map((id) => {
    const node = nodes.find((n) => n.id === id);
    if (!node) return [];
    const [lng, lat] = node.coordinates;
    const steps = 32;
    const ring: GeoJSON.Position[] = [];
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * Math.PI * 2;
      ring.push([lng + Math.cos(angle) * r, lat + Math.sin(angle) * r * 0.7]);
    }
    ring.push(ring[0]); // close
    return ring;
  });

  return {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [outerRing, ...holes.filter((h) => h.length > 0)],
    },
    properties: {},
  };
}

function haversineDistance(
  [lng1, lat1]: [number, number],
  [lng2, lat2]: [number, number]
): number {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

interface FogOfWarMapProps {
  nodes: HeritageNode[];
}

export function FogOfWarMap({ nodes }: FogOfWarMapProps) {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [hoveredNode, setHoveredNode] = useState<HeritageNode | null>(null);
  const [hoveredDistance, setHoveredDistance] = useState(0);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [currentZoom, setCurrentZoom] = useState(5.5);

  useEffect(() => {
    const state = getMuseumState();
    setUnlockedIds(state.unlockedNodeIds);
  }, []);

  const fogGeoJSON = buildFogGeoJSON(nodes, unlockedIds, currentZoom);

  const handleMapClick = useCallback(
    (e: MapMouseEvent) => {
      const clickLng = e.lngLat.lng;
      const clickLat = e.lngLat.lat;
      setUserPosition([clickLng, clickLat]);
      // Map canvas click only updates position — node HUD is opened via marker clicks
    },
    []
  );

  const handleNodeMarkerClick = useCallback(
    (node: HeritageNode, distance: number) => {
      setHoveredNode(node);
      setHoveredDistance(distance);
    },
    []
  );

  return (
    <div className="relative w-full h-full">
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: VIETNAM_CENTER[0],
          latitude: VIETNAM_CENTER[1],
          zoom: 5.5,
        }}
        onZoom={(e) => setCurrentZoom(e.viewState.zoom)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        onClick={handleMapClick}
        cursor="crosshair"
      >
        {/* Fog of war layer */}
        <Source id="fog" type="geojson" data={fogGeoJSON}>
          <Layer
            id="fog-fill"
            type="fill"
            paint={{
              "fill-color": "#1a1a18",
              "fill-opacity": 0.72,
            }}
          />
        </Source>

        {/* User position marker */}
        {userPosition && (
          <Marker longitude={userPosition[0]} latitude={userPosition[1]}>
            <div className="size-4 rounded-full bg-accent border-2 border-white shadow-lg shadow-accent/50" />
          </Marker>
        )}

        {/* Heritage node markers */}
        {nodes.map((node) => {
          const isUnlocked = unlockedIds.includes(node.id);
          const isHovered = hoveredNode?.id === node.id;
          const distance = userPosition
            ? Math.round(haversineDistance(userPosition, node.coordinates))
            : undefined;

          return (
            <Marker
              key={node.id}
              longitude={node.coordinates[0]}
              latitude={node.coordinates[1]}
              anchor="center"
            >
              <MistNodeMarker
                node={node}
                isUnlocked={isUnlocked}
                isHovered={isHovered}
                distance={distance}
                onClick={() => handleNodeMarkerClick(node, distance ?? 145)}
              />
            </Marker>
          );
        })}
      </Map>

      {/* Proximity HUD */}
      <ProximityHud
        node={hoveredNode}
        distance={hoveredDistance}
        onDismiss={() => setHoveredNode(null)}
      />

      {/* Hint overlay */}
      {!hoveredNode && (
        <div className="absolute bottom-20 md:bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs text-muted-foreground font-medium whitespace-nowrap shadow-sm">
            Chạm vào địa điểm để tiếp cận · Tap a node to approach
          </div>
        </div>
      )}
    </div>
  );
}
