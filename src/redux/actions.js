export const SET_CAPSULES = 'SET_CAPSULES';
export const SET_FILTERED_CAPSULES = 'SET_FILTERED_CAPSULES';

export const setCapsules = (localCapsules) => ({
  type: SET_CAPSULES,
  payload: localCapsules,
});

export const setFilteredCapsules = (filteredCapsules) => ({
  type: SET_FILTERED_CAPSULES,
  payload: filteredCapsules,
});
