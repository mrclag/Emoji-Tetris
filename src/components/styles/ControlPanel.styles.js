import styled from 'styled-components';

export const ControlWrapper = styled.div`
  color: red;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;

export const ControlButton = styled.img`
  display: none;
  @media screen and (max-width: 800px) {
    display: unset;
    color: white;
    height: 10vh;
    width: 20%;
    border-radius: 15px;
    background-color: teal;
    border: none;
  }
`;
