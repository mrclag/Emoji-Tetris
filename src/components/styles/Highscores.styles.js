import styled from 'styled-components';

export const HighscoreWrapper = styled.div`
  background: #f7f7f7;
  border: 3px solid #333;
  padding: 0 20px;
  margin: 0 20px;
  font-family: 'Orbitron';
  min-width: 200px;
  width: 250px;

  h2 {
    text-align: center;
  }
  ol {
    padding-left: 15px;
  }
  li {
    padding-left: 10px;
    font-size: 13px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
