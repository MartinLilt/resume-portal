import { FooterContainer } from '../container/container.styled';

import { FooterBg, FooterLink, FooterTitle, FooterText } from './footer.styled';

const Footer = () => {
  return (
    <FooterBg title="Click to visit official website.">
      <FooterLink href="#" target="_blank" rel="noopener noreferrer">
        <FooterContainer>
          <FooterTitle>Visit website</FooterTitle>
          <FooterText>www.ammatycay.com</FooterText>
        </FooterContainer>
      </FooterLink>
    </FooterBg>
  );
};

export default Footer;
