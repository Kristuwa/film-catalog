import { FcFilmReel } from "react-icons/fc";
import { Logo, HeaderContainer } from "./Header.styled.js";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <FcFilmReel size={24} color={`#303639`} />
        <p>Films Catalog</p>
      </Logo>
    </HeaderContainer>
  );
};
