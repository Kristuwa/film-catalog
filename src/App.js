import { useEffect, useMemo } from "react";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import {
  Title,
  MainContainer,
  Message,
  Wrapper,
  ButtonFilter,
} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesForTrending } from "./redux/operations";
import { getCards, getError, getFilters, getLoad } from "./redux/selectors";
import { setFilter } from "./redux/filter/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const filmsList = useSelector(getCards);
  const isLoading = useSelector(getLoad);
  const isError = useSelector(getError);
  const filter = useSelector(getFilters);

  useEffect(() => {
    if (filmsList.length === 0) {
      dispatch(fetchMoviesForTrending());
    }
  }, [dispatch, filmsList]);

  const getLikingCards = useMemo(() => {
    return (list) => {
      if (filter) {
        return list.filter((item) => item.liking);
      } else {
        return list;
      }
    };
  }, [filter]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <main>
          <MainContainer>
            <Title>Фильмы</Title>
            {filmsList.length > 0 && !isLoading && !isError && (
              <>
                <ButtonFilter
                  type="button"
                  onClick={() => dispatch(setFilter())}
                >
                  {filter ? "Все" : "Понравившиеся"}
                </ButtonFilter>
                <FilmsList list={getLikingCards(filmsList)} />
              </>
            )}
            {filmsList.length === 0 && !isLoading && !isError && (
              <Message>Нет фильмов в списке</Message>
            )}
            {isLoading && !isError && <Message>Загрузка...</Message>}
            {!isLoading && isError && <Message>{isError}</Message>}
          </MainContainer>
        </main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
