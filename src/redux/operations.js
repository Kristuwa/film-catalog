import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIEDB_KEY } from "../constants/constansts";

const headers = {
  "X-API-KEY": MOVIEDB_KEY,
};

export const fetchMoviesForTrending = createAsyncThunk(
  "cards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.kinopoisk.dev/v1.3/movie`, {
        headers,
      });

      const { docs } = response.data;
      const normalizedResults = docs.map(
        ({ name, id, description, poster: { url } }) => ({
          original_title: name,
          id,
          overview: description,
          poster_path: url,
          liking: false,
        })
      );
      return normalizedResults;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
