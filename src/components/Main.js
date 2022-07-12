import {
  MainContent,
  MainList,
  MainText,
  TextPosition,
  TextHelper,
  MainIconArrowBox,
} from '../styles';

const Main = () => {
  return (
    <MainContent>
      <MainList>
        <MainText translate="translateX(-15px)" width="100px" height="55px">
          <TextPosition>Hi</TextPosition>
        </MainText>
        <MainText size="75px" color="#FFC206" width="160px" height="75px">
          <TextPosition>I'm</TextPosition>
        </MainText>
        <MainText width="180px" height="70px" translate="translateX(95px)">
          <TextPosition>
            <TextHelper weight="400" color="#FFC206">
              Ma
            </TextHelper>
            rtin
          </TextPosition>
        </MainText>
        <MainText
          size="22px"
          width="135px"
          height="55px"
          translate="translateX(-22px)"
        >
          <TextPosition>
            Your we
            <TextHelper weight="400" color="#FFC206">
              b developer
            </TextHelper>
          </TextPosition>
        </MainText>
      </MainList>
      <MainIconArrowBox />
    </MainContent>
  );
};

export default Main;
