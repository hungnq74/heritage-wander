import type { HeritageNode } from "./types";
import { HUE_NODES } from "./data/hue";
import { HOI_AN_NODES } from "./data/hoi-an";
import { HA_NOI_NODES } from "./data/ha-noi";
import { SAPA_NODES } from "./data/sapa";
import { DA_LAT_NODES } from "./data/da-lat";
import { MEKONG_NODES } from "./data/mekong";
import { CENTRAL_NODES } from "./data/central";

export const HERITAGE_NODES: HeritageNode[] = [
  ...HUE_NODES,
  ...HOI_AN_NODES,
  ...HA_NOI_NODES,
  ...SAPA_NODES,
  ...DA_LAT_NODES,
  ...MEKONG_NODES,
  ...CENTRAL_NODES,
];

export const TOTAL_ITEMS = HERITAGE_NODES.reduce((sum, node) => sum + node.items.length, 0);
