import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
  height: 70.61px;
  padding: 0 56px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  hr {
    height: 24px;
    border: 1px solid ${(props) => props.theme.darkGray};
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive
      ? (props) => props.theme.purple
      : (props) => props.theme.white};
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 49px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;

  p {
    color: ${(props) => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;
export const Logout = styled.div`
  color: ${(props) => props.theme.red};
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.darkRed};
  }
`;
export const CartContainer = styled.div`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: 7px;
  left: 27px;

  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};

  font-size: 12px;
  font-weight: bold;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
