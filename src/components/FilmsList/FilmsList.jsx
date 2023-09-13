import { FilmItem } from "../FilmItem/FilmItem";

export const FilmsList = ({ list }) => {
  return (
    <ul>
      {list.map(({ original_title, id, overview, poster_path }) => (
        <FilmItem
          key={id}
          title={original_title}
          id={id}
          overview={overview}
          path={poster_path}
        />
      ))}
    </ul>
  );
};
