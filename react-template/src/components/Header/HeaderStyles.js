import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #f2e9e4; 
  box-shadow: 0 0 25px 0px #4a4e69;
  border-radius: 0px 0px 10px 10px; 
  font-family: 'Montserrat', sans-serif;  

  > svg { 
    color: #4a4e69;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;