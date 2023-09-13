import { FilmItem } from "../FilmItem/FilmItem";
import PropTypes from "prop-types";
import { List } from "./FilmsList.styled";

export const FilmsList = ({ list }) => {
  return (
    <List>
      {list.map(({ original_title, id, overview, poster_path }) => (
        <FilmItem
          key={id}
          title={original_title}
          id={id}
          overview={overview}
          path={poster_path}
        />
      ))}
    </List>
  );
};

FilmsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
