import { RiArrowDownSLine } from '@react-icons/all-files/ri/RiArrowDownSLine';
import { IoLogoWhatsapp } from '@react-icons/all-files/io/IoLogoWhatsapp';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
// import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
// import { VscGithubInverted } from '@react-icons/all-files/vs/VscGithubInverted';
// import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
// import { ImYoutube2 } from '@react-icons/all-files/im/ImYoutube2';
import { GrClose } from '@react-icons/all-files/gr/GrClose';
import { varStyle } from './vars';
import styled from 'styled-components';

export const ArrowIcon = styled(RiArrowDownSLine)`
  fill: ${(props) => props.fill || 'inherit'};
  width: ${(props) => props.width || 'inherit'};
  height: ${(props) => props.height || 'inherit'};
  transform: ${(props) => props.transform || 'rotate(0deg);'};
`;

export const PhoneIcon = styled(IoLogoWhatsapp)`
  fill: ${varStyle.colors.accent};
  width: 35px;
  height: 35px;
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  fill: ${varStyle.colors.white};
  width: 35px;
  height: 35px;
`;

export const CloseIcon = styled(GrClose)`
  fill: ${varStyle.colors.dark};
  width: 30px;
  height: 30px;
`;
