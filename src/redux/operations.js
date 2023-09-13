import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIEDB_KEY } from "../constants/constansts";

export const fetchMoviesForTrending = createAsyncThunk(
  "cards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIEDB_KEY}`
      );

      const { results } = response.data;
      const normalizedResults = results.map(
        ({ original_title, id, overview, poster_path }) => ({
          original_title,
          id,
          overview,
          poster_path,
          liking: false,
        })
      );
      return normalizedResults;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
