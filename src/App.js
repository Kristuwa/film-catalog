import { useEffect } from "react";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { Title, MainContainer, Message, Wrapper } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesForTrending } from "./redux/operations";
import { getCards, getError, getLoad } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const filmsList = useSelector(getCards);
  const isLoading = useSelector(getLoad);
  const isError = useSelector(getError);

  useEffect(() => {
    if (filmsList.length === 0) {
      dispatch(fetchMoviesForTrending());
    }
  }, [dispatch, filmsList]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <main>
          <MainContainer>
            <Title>Movies in the trends of the week</Title>
            {filmsList.length > 0 && !isLoading && !isError && (
              <FilmsList list={filmsList} />
            )}
            {filmsList.length === 0 && !isLoading && !isError && (
              <Message>There is no films at list</Message>
            )}
            {isLoading && !isError && <Message>Loading...</Message>}
            {!isLoading && isError && <Message>{isError}</Message>}
          </MainContainer>
        </main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
