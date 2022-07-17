import styled, { css } from 'styled-components';

export const Container = css`
  max-width: 100%;
  padding: 0 20px 80px 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1366px) {
    width: 1366px;
  }
`;

export const SectionContainer = styled.section`
  ${Container}
`;

export const HeaderContainer = styled.header`
  ${Container}
`;

export const DivContainer = styled.div`
  ${Container}
`;

export const FooterContainer = styled.div`
  ${Container}
  padding: 80px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
