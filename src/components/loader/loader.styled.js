import styled from 'styled-components';
import { varStyle } from '../../styles/vars';

export const StyledLoaderBox = styled.div`
  background: ${varStyle.backgrounds.accent};
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const StyledLoader = styled.span`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
