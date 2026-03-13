import { Link as ReactLink } from 'react-router-dom';

import styled from 'styled-components';
import BackgroundLogin from '../../assets/backgroud-login.svg';
import Background from '../../assets/backgroud.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const LeftContainer = styled.div`
  background: url(${BackgroundLogin});
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;

  img {
    width: 55%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url(${Background});
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;

  p {
    color: ${(props) => props.theme.white};
  }

  a {
    text-decoration: underline;
  }
`;
export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: ${(props) => props.theme.white};

  span {
    font-family: 'Road Rage', sans-serif;
    color: ${(props) => props.theme.purple};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 350px;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  p {
    color: ${(props) => props.theme.red};
    font-weight: 600;
    font-size: 14px;
    line-height: 80%;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;
