import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cardsInitialState = { items: [] };

const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsInitialState,
  reducers: {
    addCards(state, action) {
      state.items = action.payload;
    },
    updateCards(state, action) {
      for (const card of state.items) {
        if (card.id === action.payload) {
          card.liking = !card.liking;
          break;
        }
      }
    },
    deleteCards(state, action) {
      state.items.filter((card) => card.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: "cards",
  storage,
};

const persistedCardsReducer = persistReducer(persistConfig, cardsSlice.reducer);

export const { addCards, updateCards } = cardsSlice.actions;
export const cardsReducer = persistedCardsReducer;
