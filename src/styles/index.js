import { RiArrowDownSLine } from '@react-icons/all-files/ri/RiArrowDownSLine';

import { varStyle } from './vars';

import styled from 'styled-components';
import imageMobile from '../image/bg-img@x1-mobile.png';

export const StyledBg = styled.section`
  width: 100%;
  background-color: #1d1d1d;
  background-image: url(${imageMobile});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
`;

export const ModalBox = styled.div`
  display: flex;
  background: ${varStyle.backgrounds.accent};
  width: 100%;
  height: 100%;
  position: absolute;

  z-index: 99999;
`;

export const HeaderTitle = styled.div`
  color: ${varStyle.colors.white};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 67px;
  text-transform: uppercase;
`;

export const ContentText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${varStyle.colors.accent};

  display: flex;
  margin: 0;
  align-items: baseline;
  white-space: nowrap;
`;

export const ContentTextSup = styled.span`
  color: ${varStyle.colors.white};
  font-weight: 800;
  padding: 10px 0 5px 0;
  margin: 0 0 0 5px;
  width: 100%;

  background: ${varStyle.backgrounds.opacity.medium};
  box-shadow: ${varStyle.shadows.inset};

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ContentBox = styled.span`
  height: 120px;
  display: flex;
  background: ${varStyle.backgrounds.opacity.medium};
  box-shadow: ${varStyle.shadows.inset};

  &::before {
    content: '';
    display: flex;
    background: ${varStyle.backgrounds.accent};
    width: 20px;
  }
`;

export const VarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

export const HeaderList = styled(VarList)`
  padding: 0 0 40px 0;
`;

export const ContentList = styled(VarList)`
  flex-direction: column;
  padding: 0 0 80px 0;
`;

export const VarSentence = styled.li`
  cursor: pointer;
`;

export const HeaderSentence = styled(VarSentence)`
  &:first-child {
    margin: 25px auto 0 0;
  }
`;

export const ContentSentence = styled(VarSentence)`
  &:not(:last-child) {
    margin: 0 0 40px 0;
  }
  &:hover,
  &:focus {
    transform: scale(0.95);
  }
`;

export const LogoIcon = styled.button`
  background: none;
  border: none;
  opacity: 25%;
  cursor: pointer;
  padding: 25px 25px 25px 0;

  &:hover,
  &:focus {
    opacity: 100%;
  }
`;

export const IconButton = styled.button`
  width: 60px;
  padding: 0 0 25px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    & svg {
      transform: scale(1.2);
    }
  }
`;

export const IconPhoneButton = styled(IconButton)`
  height: 145px;
  margin: 0 10px 0 0;
  background: ${varStyle.backgrounds.opacity.low};
`;

export const IconMenuButton = styled(IconButton)`
  height: 190px;
  background: ${varStyle.backgrounds.accent};
`;

export const ContentLink = styled.a`
  text-decoration: none;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const MainText = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: ${(props) => props.height || 'auto'};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => props.size || '55px'};
  line-height: ${(props) => props.height || '70px'};
  text-transform: uppercase;
  color: ${(props) => props.color || varStyle.colors.white};

  &::after {
    content: '';
    width: ${(props) => props.width || 'auto'};
    height: inherit;
    transform: ${(props) => props.translate || 'translateX(0)'};
    background-color: ${(props) =>
      props.background || varStyle.backgrounds.opacity.medium};
  }
`;

export const TextPosition = styled.span`
  position: absolute;
  z-index: 1000;
  margin: ${(props) => props.margin || '0'};
`;

export const TextHelper = styled.span`
  color: ${(props) => props.color || varStyle.colors.white};
  font-weight: ${(props) => props.weight || '800'};
`;

export const MainIconArrowBox = styled(RiArrowDownSLine)`
  margin: 0 auto 30px auto;
  width: 240px;
  height: 120px;
  fill: ${varStyle.colors.accent};
`;

export const FooterIconArrowBox = styled(RiArrowDownSLine)`
  margin: 0 auto;
  width: 120px;
  height: 60px;
  transform: rotate(180deg);
  fill: ${varStyle.colors.dark};
`;

export const MainList = styled.ul`
  list-style: none;

  margin: 0 0 40px 0;
  padding: 0;
`;

export const FooterText = styled.span`
  font-weight: 800;
  font-size: 18px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const IconArrowBox = styled.span`
  fill: ${varStyle.colors.dark};
  transform: rotateX(180deg) scale(0.5);
  margin: 15px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
