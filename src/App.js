import { useEffect, useState } from "react";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { MOVIEDB_KEY } from "./constants/constansts";
import { Title, MainContainer } from "./App.styled";

function App() {
  const [filmsList, setFilmsList] = useState([]);
  useEffect(() => {
    const fetchQueryResultsForTrending = async () => {
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
          })
        );
        setFilmsList(normalizedResults);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQueryResultsForTrending();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <MainContainer>
          <Title>Movies in the trends of the week</Title>
          {filmsList.length > 0 ? (
            <FilmsList list={filmsList} />
          ) : (
            <p>There is no films at list</p>
          )}
        </MainContainer>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
