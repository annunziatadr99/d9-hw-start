import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
