import { useEffect } from "react";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { Title, MainContainer } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesForTrending } from "./redux/operations";
import { getCards } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const filmsList = useSelector(getCards);

  useEffect(() => {
    if (filmsList.length === 0) {
      dispatch(fetchMoviesForTrending());
    }
  }, [dispatch, filmsList]);

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
