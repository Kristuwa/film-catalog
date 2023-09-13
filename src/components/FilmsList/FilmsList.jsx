export const FilmsList = ({ list }) => {
  console.log(list);
  return (
    <ul>
      {list.map(({ original_title, id, overview, poster_path }) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        return (
          <li key={id}>
            <img alt="poster" src={imageUrl} height="574" width="395" />
            <p>{original_title}</p>
            <p>{overview}</p>
          </li>
        );
      })}
    </ul>
  );
};
