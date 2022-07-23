import React from 'react';
import { links } from '../../enums';
import {
  ItemMainText,
  ItemMainList,
  ItemMainSentence,
  ItemMainLink,
  ItemMainBox,
} from './itemMain.styled';

const ItemMainContent = () => {
  return (
    <ItemMainList>
      {links.map((item, id) => {
        return (
          <ItemMainSentence
            key={id}
            title={`Click to open my ${item.name} profile.`}
          >
            <ItemMainLink
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ItemMainBox></ItemMainBox>
              <ItemMainText>Follow me on {item.name}</ItemMainText>
            </ItemMainLink>
          </ItemMainSentence>
        );
      })}
    </ItemMainList>
  );
};
export default ItemMainContent;
