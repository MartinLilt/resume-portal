import { modalType } from '../../enums';
import { varStyle } from '../../styles/vars';
import { HeaderContainer } from '../container/container.styled';
import {
  HeaderLogo,
  HeaderList,
  HeaderSentence,
  HeaderButton,
  HeaderSvg,
} from './header.styled';

import PhoneIcon from '../../icons/phone.svg';
import BurgerMenuIcon from '../../icons/burger.svg';

const Header = ({ toggleModal }) => {
  const headerLogo = new URL('../../image/logo.png', import.meta.url);

  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderSentence width="100px" height="60px" title="Change theme">
          <HeaderLogo src={headerLogo} alt="Resume logo" />
        </HeaderSentence>
        <HeaderSentence width="60px" height="145px">
          <HeaderButton
            title="My contacts"
            background={varStyle.backgrounds.opacity.low}
            shadow={varStyle.shadows.inset}
            type="button"
            onClick={() => toggleModal(modalType.contact)}
          >
            <HeaderSvg>
              <PhoneIcon fill={varStyle.colors.accent} />
            </HeaderSvg>
          </HeaderButton>
        </HeaderSentence>
        <HeaderSentence width="60px" height="190px">
          <HeaderButton
            title="More information"
            background={varStyle.backgrounds.accent}
            type="button"
            onClick={() => toggleModal(modalType.menu)}
          >
            <HeaderSvg>
              <BurgerMenuIcon fill={varStyle.colors.white} />
            </HeaderSvg>
          </HeaderButton>
        </HeaderSentence>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
