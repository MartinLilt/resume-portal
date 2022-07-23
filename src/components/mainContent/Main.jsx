import React from 'react';
import {
  MainList,
  MainSentence,
  MainDefaultText,
  MainSupEl,
  MainSvg,
} from './main.styled';
import { SectionContainer } from '../container/container.styled';
import { varStyle } from '../../styles/vars';

import ItemMainContent from '../ItemMainContent';

// import ArrowIcon from '../../icons/arrow.svg';

const Main = () => {
  return (
    <main>
      <SectionContainer>
        <MainList title="I'm Martin. - Nice to meet you!">
          <MainSentence>
            <MainDefaultText>Hi</MainDefaultText>
          </MainSentence>
          <MainSentence>
            <MainDefaultText size="75px" color={varStyle.colors.accent}>
              I'm
            </MainDefaultText>
          </MainSentence>
          <MainSentence>
            <MainDefaultText>Martin</MainDefaultText>
          </MainSentence>
          <MainSentence>
            <MainDefaultText size="20px">Your web developer</MainDefaultText>
            <MainSupEl />
          </MainSentence>
        </MainList>
        <MainSvg title="Scroll below to see more!">
          {/* <ArrowIcon fill={varStyle.colors.accent} /> */}
        </MainSvg>
        <ItemMainContent />
      </SectionContainer>
    </main>
  );
};

export default Main;
