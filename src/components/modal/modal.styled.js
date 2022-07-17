import styled from 'styled-components';

import { varStyle } from '../../styles/vars';
import { DivContainer } from '../container/container.styled';

export const ModalBox = styled.div`
  background: ${varStyle.backgrounds.accent};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999;
`;

export const ModalContainer = styled(DivContainer)``;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export const ModalSentence = styled.li`
  background: ${varStyle.backgrounds.main};
  display: flex;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }

  &::after {
    content: '';
    background: ${varStyle.backgrounds.white};
    width: 15px;
    display: flex;
  }
`;

export const ModalLink = styled.a`
  padding: 25px 0 0 0;
  width: 100%;

  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${varStyle.colors.white};
`;
