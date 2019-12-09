import styled from 'styled-components';

export const HighscoreWrapper = styled.div`
  background: #f7f7f7;
  border: 3px solid #333;
  padding: 0 20px;
  margin: 0 20px;
  font-size: 1
  font-family: "Orbitron";
  height: 300px;
  min-width: 200px;
  width: 200px;
  
  h2 {
    text-align: center;
  }
  ol {
    padding-left: 15px;
  }
  li {
    padding-left: 10px;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
