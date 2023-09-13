import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchMoviesForTrending } from "../operations";

const cardsInitialState = { items: [], isLoading: false, error: null };

const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsInitialState,
  reducers: {
    updateCards(state, action) {
      console.log(action.payload);
      for (const card of state.items) {
        if (card.id === action.payload) {
          card.liking = !card.liking;
          break;
        }
      }
    },
    deleteCards(state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesForTrending.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.payload,
      };
    });
    builder.addCase(fetchMoviesForTrending.pending, (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    });
    builder.addCase(fetchMoviesForTrending.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    });
  },
});

const persistConfig = {
  key: "cards",
  storage,
};

const persistedCardsReducer = persistReducer(persistConfig, cardsSlice.reducer);

export const { deleteCards, updateCards } = cardsSlice.actions;
export const cardsReducer = persistedCardsReducer;
