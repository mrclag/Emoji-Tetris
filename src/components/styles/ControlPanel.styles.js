import styled from 'styled-components';

export const ControlWrapper = styled.div`
  color: red;
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-top: 0.75vh;
  width: 320px;
`;

export const ControlButton = styled.img`
  display: none;
  @media screen and (max-width: 800px) {
    display: unset;
    color: white;
    height: 10vh;
    padding: 3px;
    width: 20%;
    border: 3px solid #333
    border-radius: 15px;
    background-color: #f7f7f7;
  }
`;
