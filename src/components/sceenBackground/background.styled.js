import styled from 'styled-components';

import { varStyle } from '../../styles/vars';

import imageMobileDefault from '../../image/bg-img@x1-mobile.jpg';
import imageMobileFullScreen from '../../image/bg-img@x2-mobile.jpg';
import imageTabletDefault from '../../image/bg-img@x1-tablet.jpg';
import imageTabletFullScreen from '../../image/bg-img@x2-tablet.jpg';
import imageDesktopDefault from '../../image/bg-img@x1-desktop.jpg';
import imageDesktopFullScreen from '../../image/bg-img@x2-desktop.jpg';

export const StyledBackground = styled.div`
  background-image: url(${imageMobileDefault});
  background-color: ${varStyle.backgrounds.main};
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imageMobileFullScreen});
    background-color: ${varStyle.backgrounds.main};
  }

  @media screen and (min-width: 768px) {
    background-image: url(${imageTabletDefault});
    background-color: ${varStyle.backgrounds.main};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imageTabletFullScreen});
      background-color: ${varStyle.backgrounds.main};
    }
  }

  @media screen and (min-width: 1366px) {
    background-image: url(${imageDesktopDefault});
    background-color: ${varStyle.backgrounds.main};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imageDesktopFullScreen});
      background-color: ${varStyle.backgrounds.main};
    }
  }
`;
