import styled from 'styled-components';

import { varStyle } from '../../styles/vars';

export const FooterBg = styled.footer`
  background: ${varStyle.backgrounds.accent};
  clip-path: polygon(50% 0, 100% 25%, 100% 100%, 0 100%, 0 25%);
`;

export const FooterLink = styled.a`
  text-decoration: none;
`;

export const FooterTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 15px;
  text-transform: uppercase;
  color: ${varStyle.colors.dark};
  margin: 0;
`;

export const FooterText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${varStyle.colors.dark};
  margin: 0 0 20px 0;
`;

export const FooterSvg = styled.span`
  width: 20px;
  height: 20px;
  display: flex;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`;
