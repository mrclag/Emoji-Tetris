import styled from 'styled-components';

import bgImage from '../../img/emojiwallpaper.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #fff no-repeat;
  background-size: auto 100%;
  overflow: hidden;
  .overlay {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  justify-content: center;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

  @media screen and (max-width: 800px) {
    display: block;
    max-width: unset;
    padding: 30px;

    aside {
      padding: 0px;
      padding-top: 13vh;
      display: flex;
      height: 10vh;
      max-width: unset;
    }
  }
`;
