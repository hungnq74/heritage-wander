import type { MuseumState, HeritageNode } from "./types";

const STORAGE_KEY = "heritage-wander:museum";

const DEFAULT_STATE: MuseumState = {
  unlockedNodeIds: [],
  collectedItemIds: [],
  earnedBadgeIds: [],
};

export function getMuseumState(): MuseumState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as MuseumState;
    // backfill earnedBadgeIds for existing saves
    if (!parsed.earnedBadgeIds) parsed.earnedBadgeIds = [];
    return parsed;
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: MuseumState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function unlockNode(nodeId: string): void {
  const state = getMuseumState();
  if (!state.unlockedNodeIds.includes(nodeId)) {
    state.unlockedNodeIds.push(nodeId);
    saveState(state);
  }
}

export function addItems(itemIds: string[]): void {
  const state = getMuseumState();
  for (const id of itemIds) {
    if (!state.collectedItemIds.includes(id)) {
      state.collectedItemIds.push(id);
    }
  }
  saveState(state);
}

export function isNodeUnlocked(nodeId: string): boolean {
  return getMuseumState().unlockedNodeIds.includes(nodeId);
}

export function isItemCollected(itemId: string): boolean {
  return getMuseumState().collectedItemIds.includes(itemId);
}

/**
 * Checks if all nodes in a city have been unlocked.
 * If yes and the badge hasn't been awarded yet, awards it and returns the cityId.
 * Returns null if the badge was already earned or the city is incomplete.
 */
export function checkAndAwardCityBadge(
  cityId: string,
  cityNodes: HeritageNode[]
): string | null {
  if (cityNodes.length === 0) return null;
  const state = getMuseumState();
  if (state.earnedBadgeIds.includes(cityId)) return null;
  const allUnlocked = cityNodes.every((n) =>
    state.unlockedNodeIds.includes(n.id)
  );
  if (!allUnlocked) return null;
  state.earnedBadgeIds.push(cityId);
  saveState(state);
  return cityId;
}

export function resetMuseum(): void {
  saveState(DEFAULT_STATE);
}
