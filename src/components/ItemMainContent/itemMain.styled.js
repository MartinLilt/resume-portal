import styled from 'styled-components';

import { varStyle } from '../../styles/vars';

export const ItemMainList = styled.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const ItemMainSentence = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 40px 0;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const ItemMainLink = styled.a`
  text-decoration: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const ItemMainBox = styled.div`
  display: flex;
  height: 120px;
  background: ${varStyle.backgrounds.opacity.low};
  box-shadow: ${varStyle.shadows.inset};

  &::before {
    content: '';
    width: 15px;
    height: 100%;
    background: ${varStyle.backgrounds.accent};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const ItemMainText = styled.p`
  height: 35px;
  display: flex;
  margin: 0;
  align-items: flex-end;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${varStyle.colors.accent};

  &::after {
    content: '';
    position: absolute;
    display: flex;
    background: ${varStyle.backgrounds.opacity.low};
    box-shadow: ${varStyle.shadows.inset};
    height: inherit;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;
