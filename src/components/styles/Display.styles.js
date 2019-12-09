import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 3px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#333')};
  background: #f7f7f7;
  font-family: Pixel, Arial, Helvitica, sans-serif;
  font-size: 0.8rem;

  @media screen and (max-width: 800px) {
    min-height: unset;
    height: 3.33vh;
    padding: 8px;
    margin: 0;
    width: 150px;
  }
`;
