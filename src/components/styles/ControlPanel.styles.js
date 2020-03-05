import styled from 'styled-components';

export const ControlWrapper = styled.div`
  color: red;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5vh;
  width: 320px;
  @media screen and (min-width: 800px) {
    position: absolute;
  }
`;

export const ControlButton = styled.img`
  display: none;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  touch-action: manipulation;
  @media screen and (max-width: 800px) {
    display: unset;
    color: white;
    height: 8vh;
    width: 20%;
    border: 3px solid #333
    border-radius: 15px;
    background-color: #f7f7f7;
  }
`;
