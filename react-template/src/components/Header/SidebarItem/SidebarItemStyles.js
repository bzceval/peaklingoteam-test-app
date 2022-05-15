import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2e9e4; 
  font-size: 20px;
  color: #4a4e69;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: #4a4e69;
    color: #f2e9e4; 
  }
`