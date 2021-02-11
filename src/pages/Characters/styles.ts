import styled, { css } from 'styled-components';

interface ThumbnailDTO {
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface InputLabelProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const InputLabel = styled.div<InputLabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 0 auto;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
    padding: 0 10px;
    border-radius: 10px;

    ${(props) => props.isFocused
      && css`
        border: 1px solid;
        background: #ed1d24;
      `}

    input {
      border: none;
      background: transparent;
      margin: 10px;
    }
  }

  svg#enter {
    margin: 5px;
    width: 26px;
    height: 26px;
    padding: 3px;
    border-radius: 5px;
    background: #f1f1f1;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
`;

const urlImg = (props: ThumbnailDTO) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  transition: all 1s;

  h2,
  p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    height: 400px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: height 1s;
  }

  &:hover {
    div#img {
      height: 100px;
    }

    transform: scale(1.2, 1.2);
    -webkit-box-shadow:0px 0px 50px 8px rgb(0,0,0);
    box-shadow: 0px 0px 50px 8px rgb(0,0,0);
  }
`;

export const Img = styled.div`
  height: 200px;
  width: 100%;
  background: url(${urlImg}) no-repeat center;
  background-size: cover;
`;

export const ButtonMore = styled.div`
  background: #f1f1f1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px 100px;
  padding: 0 50px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #ec1d24;
  }
`;
