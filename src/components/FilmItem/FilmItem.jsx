import PropTypes from "prop-types";
import {
  ButtonClose,
  Image,
  Item,
  TitleCard,
  BottomTextCard,
  ButtonLike,
} from "./FilmItem.styled";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useState } from "react";

export const FilmItem = ({ id, title, overview, path }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${path}`;
  const [like, setLike] = useState(false);
  return (
    <Item>
      <div>
        <ButtonClose type="button" aria-label="close">
          <AiOutlineClose size={20} />
        </ButtonClose>
        <Image alt={title} src={imageUrl} height="auto" width="270" />
        <TitleCard>{title}</TitleCard>
        <BottomTextCard>{overview}</BottomTextCard>
      </div>
      <ButtonLike
        type="button"
        onClick={() => setLike((prevState) => !prevState)}
        aria-label="add like"
      >
        {like ? (
          <FcLike size={24} color={"#e00000"} />
        ) : (
          <AiOutlineHeart size={24} />
        )}
      </ButtonLike>
    </Item>
  );
};

FilmItem.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
