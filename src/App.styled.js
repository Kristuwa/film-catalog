import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const MainContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 110px;
  width: 100%;
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 200px;
  margin-bottom: 285px;
`;

export const ButtonFilter = styled.button`
  display: block;
  width: 170px;
  height: 30px;
  margin-left: auto;
  margin-right: 140px;
  margin-bottom: 15px;

  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bgBtn};
  color: ${(props) => props.theme.colors.primaryColor};

  transition: color 250ms linear, border-color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accentColor};
    border-color: ${(props) => props.theme.colors.accentColor};
  }
`;
