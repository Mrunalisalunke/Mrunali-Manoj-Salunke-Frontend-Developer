// reducers.js
import { SET_CAPSULES, SET_FILTERED_CAPSULES } from './actions';

const initialState = {
  capsules: [],
  filteredCapsules: [],
};

const capsuleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAPSULES:
      return {
        ...state,
        capsules: action.payload,
        filteredCapsules: action.payload,
      };
    case SET_FILTERED_CAPSULES:
      return {
        ...state,
        filteredCapsules: action.payload,
      };
    default:
      return state;
  }
};

export default capsuleReducer;
