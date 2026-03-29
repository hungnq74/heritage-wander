"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
import type { MapMouseEvent, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import type { HeritageNode } from "@/lib/types";
import { MistNodeMarker } from "./mist-node-marker";
import { ProximityHud } from "./proximity-hud";
import { getMuseumState } from "@/lib/museum-store";
import type { GeoJSON } from "geojson";
import { Navigation, Crosshair } from "lucide-react";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Vietnam center — shows full country at zoom 5.5
const VIETNAM_CENTER: [number, number] = [106.6297, 16.4637];

// Proximity radius in meters for entering a node
const PROXIMITY_METERS = 150;

// Build fog GeoJSON: large bounding box with holes for each unlocked node
function buildFogGeoJSON(nodes: HeritageNode[], unlockedIds: string[], zoom: number): GeoJSON.Feature<GeoJSON.Polygon> {
  const outerRing: GeoJSON.Position[] = [
    [-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90],
  ];

  const r = zoom < 8 ? 0.05 : 0.012;

  const holes: GeoJSON.Position[][] = unlockedIds.map((id) => {
    const node = nodes.find((n) => n.id === id);
    if (!node || !node.coordinates) return [];
    const [lng, lat] = node.coordinates;
    const steps = 32;
    const ring: GeoJSON.Position[] = [];
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * Math.PI * 2;
      ring.push([lng + Math.cos(angle) * r, lat + Math.sin(angle) * r * 0.7]);
    }
    ring.push(ring[0]);
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
  gpsPosition?: [number, number] | null; // from GeolocationGate
}

export function FogOfWarMap({ nodes, gpsPosition }: FogOfWarMapProps) {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [hoveredNode, setHoveredNode] = useState<HeritageNode | null>(null);
  const [hoveredDistance, setHoveredDistance] = useState(0);
  // userPosition: GPS position (preferred) or manual click fallback
  const [manualPosition, setManualPosition] = useState<[number, number] | null>(null);
  const [currentZoom, setCurrentZoom] = useState(5.5);
  const [devMode, setDevMode] = useState(false);
  const mapRef = useRef<MapRef>(null);
  const hasFlewToGps = useRef(false);

  // Check dev mode from URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setDevMode(params.has("dev"));
    }
  }, []);

  useEffect(() => {
    const state = getMuseumState();
    setUnlockedIds(state.unlockedNodeIds);
  }, []);

  // Fly to GPS position on first GPS fix
  useEffect(() => {
    if (gpsPosition && !hasFlewToGps.current && mapRef.current) {
      hasFlewToGps.current = true;
      mapRef.current.flyTo({
        center: gpsPosition,
        zoom: 14,
        duration: 2000,
      });
    }
  }, [gpsPosition]);

  const userPosition = gpsPosition ?? manualPosition;

  const fogGeoJSON = buildFogGeoJSON(nodes, unlockedIds, currentZoom);

  const handleMapClick = useCallback(
    (e: MapMouseEvent) => {
      // In dev mode, clicking sets the fake GPS position
      if (devMode) {
        setManualPosition([e.lngLat.lng, e.lngLat.lat]);
        return;
      }
      // Without GPS, allow manual position for demo
      if (!gpsPosition) {
        setManualPosition([e.lngLat.lng, e.lngLat.lat]);
      }
    },
    [devMode, gpsPosition]
  );

  const handleNodeMarkerClick = useCallback(
    (node: HeritageNode, distance: number) => {
      setHoveredNode(node);
      setHoveredDistance(distance);
    },
    []
  );

  const flyToGps = useCallback(() => {
    if (gpsPosition && mapRef.current) {
      mapRef.current.flyTo({ center: gpsPosition, zoom: 15, duration: 1200 });
    }
  }, [gpsPosition]);

  return (
    <div className="relative w-full h-full">
      <Map
        ref={mapRef}
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
        cursor={devMode ? "crosshair" : "default"}
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

        {/* GPS user location marker — pulsing blue dot */}
        {gpsPosition && (
          <Marker longitude={gpsPosition[0]} latitude={gpsPosition[1]}>
            <div className="relative flex items-center justify-center">
              <div className="size-4 rounded-full bg-blue-500 border-2 border-white shadow-lg z-10" />
              <div className="absolute size-4 rounded-full bg-blue-400 animate-ping opacity-60" />
              <div className="absolute size-10 rounded-full bg-blue-300/20" />
            </div>
          </Marker>
        )}

        {/* Manual/fallback position marker */}
        {!gpsPosition && manualPosition && (
          <Marker longitude={manualPosition[0]} latitude={manualPosition[1]}>
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

          if (!node.coordinates) return null;
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
                onClick={() => handleNodeMarkerClick(node, distance ?? 9999)}
              />
            </Marker>
          );
        })}
      </Map>

      {/* Proximity HUD */}
      <ProximityHud
        node={hoveredNode}
        distance={hoveredDistance}
        proximityMeters={PROXIMITY_METERS}
        onDismiss={() => setHoveredNode(null)}
      />

      {/* GPS re-center button */}
      {gpsPosition && (
        <button
          onClick={flyToGps}
          className="absolute bottom-24 md:bottom-8 right-4 size-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-lg flex items-center justify-center text-primary hover:bg-secondary transition-colors"
          title="Về vị trí của tôi"
        >
          <Navigation className="size-5" />
        </button>
      )}

      {/* Dev mode indicator */}
      {devMode && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-amber-400/90 text-amber-900 text-xs font-bold flex items-center gap-1.5 shadow">
          <Crosshair className="size-3" />
          Dev: nhấn bản đồ để đặt vị trí giả
        </div>
      )}

      {/* Hint overlay */}
      {!hoveredNode && (
        <div className="absolute bottom-20 md:bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs text-muted-foreground font-medium whitespace-nowrap shadow-sm">
            {gpsPosition
              ? "Di chuyển đến di sản để mở khóa"
              : "Chạm vào địa điểm để tiếp cận · Tap a node to approach"}
          </div>
        </div>
      )}
    </div>
  );
}
