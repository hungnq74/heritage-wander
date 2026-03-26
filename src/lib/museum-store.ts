import type { MuseumState } from "./types";

const STORAGE_KEY = "heritage-wander:museum";

const DEFAULT_STATE: MuseumState = {
  unlockedNodeIds: [],
  collectedItemIds: [],
};

export function getMuseumState(): MuseumState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return JSON.parse(raw) as MuseumState;
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

export function resetMuseum(): void {
  saveState(DEFAULT_STATE);
}
