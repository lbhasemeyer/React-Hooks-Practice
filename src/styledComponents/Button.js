import styled from 'styled-components';

export default styled.button`
  background-color: ${props=> props.color};
  color: white;
  margin: ${props=> (props.color === 'red' ? 'auto' : null)};
  display: ${props=> (props.color === 'red' ? 'block' : null)};
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 10px;
`;
