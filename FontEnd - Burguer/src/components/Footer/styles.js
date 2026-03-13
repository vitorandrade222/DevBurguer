import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50px;

  background-color: ${(props) => props.theme.darkPurple};

  p {
    color: ${(props) => props.theme.white};
    font-weight: lighter;
    font-size: 14px;
  }
`;
