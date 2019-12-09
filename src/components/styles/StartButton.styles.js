import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: #333;
  background: #fac632;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 170px;
    height: 10vh;
    padding: 0px;
    margin: 0;
    font-size: 0.8rem;
  }
`;
