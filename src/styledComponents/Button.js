import styled from 'styled-components';

export default styled.button`
  background-color: ${props=> props.color};
  color: white;
  height: ${props=> (props.color === 'purple' ? '100px' : null)};
  width: ${props=> (props.color === 'purple' ? '100%' : null)};
  margin-top: 50px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
`;
