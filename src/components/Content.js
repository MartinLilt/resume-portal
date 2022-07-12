import {
  ContentList,
  ContentSentence,
  ContentLink,
  ContentBox,
  ContentText,
  ContentTextSup,
} from '../styles';

import { links } from '../enums';

const Content = () => {
  return (
    <ContentList>
      {links.map((link, id) => {
        return (
          <ContentSentence key={id}>
            <ContentLink href={link.href} target="_blank">
              <ContentBox></ContentBox>
              <ContentText>
                Follow me
                <ContentTextSup>on {link.name}</ContentTextSup>
              </ContentText>
            </ContentLink>
          </ContentSentence>
        );
      })}
    </ContentList>
  );
};

export default Content;
