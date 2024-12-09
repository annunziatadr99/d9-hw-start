const ADD_FAVOURITE = "ADD_FAVOURITE";
const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

// Azioni
export const addFavourite = (company) => ({
  type: ADD_FAVOURITE,
  payload: company,
});

export const removeFavourite = (company) => ({
  type: REMOVE_FAVOURITE,
  payload: company,
});

// Stato iniziale
const initialState = {
  list: [],
};

// Reducer
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      const newState = {
        ...state,
        list: [...state.list, action.payload],
      };
      console.log("Nuovo stato dopo ADD_FAVOURITE:", newState);
      return newState;
    case REMOVE_FAVOURITE:
      const updatedState = {
        ...state,
        list: state.list.filter((company) => company !== action.payload),
      };
      console.log("Nuovo stato dopo  REMOVE_FAVOURITE:", updatedState);
      return updatedState;
    default:
      return state;
  }
};

export default favouritesReducer;
