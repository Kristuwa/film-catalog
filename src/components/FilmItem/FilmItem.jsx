export const FilmItem = ({ id, title, overview, path }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${path}`;
  return (
    <li>
      <img alt="poster" src={imageUrl} height="287" width="197" />
      <p>{title}</p>
      <p>{overview}</p>
    </li>
  );
};
