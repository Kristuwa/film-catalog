import styled from "styled-components";

export const Item = styled.li`
  width: 330px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  padding: 10px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonClose = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-bottom: 10px;

  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.bgBtn};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const TitleCard = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primaryColor};
  margin-bottom: 10px;
`;

export const BottomTextCard = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondaryColor};
  margin-bottom: 10px;
`;

export const ButtonLike = styled.button`
  display: block;
  width: 24px;
  height: 18px;
  margin-left: auto;

  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.bgBtn};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;
