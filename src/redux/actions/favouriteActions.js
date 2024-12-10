import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./actionTypes";

export const addFavourite = (company) => ({
  type: ADD_FAVOURITE,
  payload: company,
});

export const removeFavourite = (company) => ({
  type: REMOVE_FAVOURITE,
  payload: company,
});
