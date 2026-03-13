import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 50px;
  }
  .react-multiple-carousel__arrow--right {
    right: 50px;
    top: 50px;
  }

  padding-top: 20px;
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-style: normal;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 30px 30px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 57px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }
`;

export const ContainerItens = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  height: 250px;
  width: 100%;

  font-family: 'Poppins', sans-serif;
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  font-size: 22.45px;
  font-weight: bold;
  border-radius: 50px;
  margin-top: 50px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
