import styled from 'styled-components';

export const ContainerButton = styled.button`
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  height: 52px;
  width: 350px;
  background: ${(props) => props.theme.purple};
  border-radius: 5px;
  border: 0;

  &:hover {
    background: ${(props) => props.theme.secondDarkPurple};
    color: ${(props) => props.theme.mainBlack};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
