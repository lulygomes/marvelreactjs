import styled from 'styled-components';

interface ThumbnailDTO{
  thumbnail: {
    path: string;
    extension: string;
  }
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
`;

export const Card = styled.div`
  background: #f1f1f1;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow:2px 2px 10px 1px rgba(0,0,0,0.3);

`;

export const Img = styled.div<ThumbnailDTO>`
  height: 200px;
  width: 100%;
  background: url(${(props) => `${props.thumbnail.path}.${props.thumbnail.extension}`} ) no-repeat center;
  background-size: cover;
`;
