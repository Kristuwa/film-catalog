import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 15px;
  border-top: 1px solid #a1a1a1;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TextDate = styled.p`
  color: ${(props) => props.theme.colors.secondaryColor};
`;
