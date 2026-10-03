/**
 * Public-core extension seam.
 * Explicit adult scene payloads are intentionally not stored in this repository.
 * A private build may register an external provider at build/runtime.
 */
let provider = null;

export function registerAdultContentProvider(nextProvider) {
  provider = nextProvider;
}

export function hasAdultContent(sceneId) {
  return Boolean(provider?.has?.(sceneId));
}

export function loadAdultScene(sceneId) {
  if (!provider?.load) return null;
  return provider.load(sceneId);
}
