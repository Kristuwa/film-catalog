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
import { useDispatch } from "react-redux";
import { deleteCards, updateCards } from "../../redux/cards/cardsSlice";

export const FilmItem = ({ id, title, overview, path, liking }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <div>
        <ButtonClose
          type="button"
          aria-label="close"
          onClick={() => dispatch(deleteCards(id))}
        >
          <AiOutlineClose size={20} />
        </ButtonClose>
        <Image alt={title} src={path} height="auto" width="270" />
        <TitleCard>{title}</TitleCard>
        <BottomTextCard>{overview}</BottomTextCard>
      </div>
      <ButtonLike
        type="button"
        onClick={() => dispatch(updateCards(id))}
        aria-label="add like"
      >
        {liking ? (
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
  overview: PropTypes.string,
  path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liking: PropTypes.bool.isRequired,
};
