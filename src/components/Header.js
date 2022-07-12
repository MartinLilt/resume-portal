import {
  HeaderTitle,
  HeaderList,
  HeaderSentence,
  LogoIcon,
  IconPhoneButton,
  IconMenuButton,
} from '../styles';

import { PhoneIcon, MenuIcon } from '../styles/icons';
import { modalType } from '../enums';

const Header = ({ toggleModal }) => {
  return (
    <div>
      <HeaderTitle>
        <div>
          <HeaderList>
            <HeaderSentence>
              <LogoIcon></LogoIcon>
            </HeaderSentence>
            <HeaderSentence>
              <IconPhoneButton onClick={() => toggleModal(modalType.contact)}>
                <PhoneIcon />
              </IconPhoneButton>
            </HeaderSentence>
            <HeaderSentence>
              <IconMenuButton onClick={() => toggleModal(modalType.menu)}>
                <MenuIcon />
              </IconMenuButton>
            </HeaderSentence>
          </HeaderList>
        </div>
      </HeaderTitle>
    </div>
  );
};

export default Header;
