import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  /* background: rgba(${props => props.color}, 0.8); */
  background: ${props =>
    props.color !== '0, 0, 0' ? `url(${props.emoji})` : 'none'};
  background-size: contain;
  background-repeat: no-repeat;
  /* border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
  outline: ${props =>
    props.color !== '0, 0, 0' ? '0px solid white' : 'none'} */
}
`;
