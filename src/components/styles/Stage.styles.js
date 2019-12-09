import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(400px / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 3px solid #333;
  width: 100%;
  max-width: 400px;
  background: #f7f7f7;

  @media screen and (max-width: 800px) {
    max-width: 320px;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(70vh / ${props => props.height})
    );
  }
`;
