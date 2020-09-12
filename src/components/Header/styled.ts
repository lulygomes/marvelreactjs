import styled from 'styled-components';

export const Container = styled.header`
  background: #ec1d24;
  height: 80px;
  width: 100%;
  border-radius: 8px 8px 0 0 ;
  display: flex;
  align-items: center;

    img {
      height: 80px;
      margin-right: 5px;
    }


  div > a {
    text-decoration: none;
    color: #000;
    background: #fefefe;
    height: 40px;
    margin: 15px;
    padding: 10px 10px;
    border-radius: 5px;
    font-weight: 700;
  }
`;
