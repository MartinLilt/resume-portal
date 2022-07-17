import styled from 'styled-components';

import { varStyle } from '../../styles/vars';

export const MainList = styled.ul`
  &::before {
    content: '';
    display: flex;
    background: ${varStyle.backgrounds.accent};
    clip-path: polygon(0 0, 100% 0%, 97% 100%, 0% 100%);
    width: 100px;
    height: 15px;
  }

  margin: 0 0 40px 0;
  padding: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const MainSentence = styled.li`
  position: relative;
  list-style: none;
  height: 70px;
  display: flex;

  &:last-child {
    margin: 0 0 40px 0;
  }

  &::after {
    content: '';
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

export const MainDefaultText = styled.p`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: ${(prop) => prop.size || '55px'};
  line-height: 67px;
  text-transform: uppercase;
  color: ${(prop) => prop.color || varStyle.colors.white};
  margin: 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;

export const MainSupEl = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: ${varStyle.backgrounds.accent};
  width: 85px;
  height: 15px;

  &::after {
    content: '';
    background: #ffffff;
    width: 130%;
    position: absolute;
    left: 100px;
    height: 3px;
  }
`;

export const MainSvg = styled.span`
  display: block;
  margin: 0 auto 40px auto;
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;
