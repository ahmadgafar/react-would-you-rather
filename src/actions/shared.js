export const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";

export function handleInitialData() {
  return {
    type: FETCH_DATA_REQUESTED,
  };
}
