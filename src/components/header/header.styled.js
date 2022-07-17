import styled from 'styled-components';

export const HeaderLogo = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const HeaderList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const HeaderSentence = styled.li`
  width: ${(prop) => prop.width || 'auto'};
  height: ${(prop) => prop.height || 'auto'};
  list-style: none;

  &:first-child {
    margin: 0 auto 0 0;
    padding: 50px 25px 25px 0;
    cursor: pointer;
  }

  &:nth-child(2n) {
    margin: 0 10px 0 0;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const HeaderButton = styled.button`
  width: inherit;
  height: inherit;
  border: none;
  cursor: pointer;
  background: ${(prop) => prop.background || 'inherit'};
  box-shadow: ${(prop) => prop.shadow || 'none'};
  clip-path: polygon(0px 0px, 100% 0%, 100% 95%, 0% 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 0 25px 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const HeaderSvg = styled.span`
  fill: ${(prop) => prop.fill || 'inherit'};
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;
