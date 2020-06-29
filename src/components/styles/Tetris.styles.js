import styled from 'styled-components';

import bgImage from '../../img/emojiwallpaper.jpg';

export const HeaderBar = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 7vh;
  @media screen and (max-width: 800px) {
    height: 5vh;
  }
`;

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
  padding: 10px;
  margin: 0 auto;
  justify-content: center;

  aside {
    width: 100%;
    max-width: 200px;
    padding: 0 20px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    max-width: unset;
    padding: 0.5vh;
    flex-direction: column;
    align-items: center;

    aside {
      padding: 0px;
      display: flex;
      justify-content: center;
      height: 10vh;
      margin-top: 0.75vh;
      max-width: unset;
    }
  }
`;
