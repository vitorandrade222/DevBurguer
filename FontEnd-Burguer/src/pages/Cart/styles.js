import styled from 'styled-components';
import texture from '../../assets/texture.svg';
import BackgroundHome from '../../assets/backgroud-home.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: fixed url('${BackgroundHome}');
`;
export const Banner = styled.div`
  background: url('${texture}');
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 135px;
  }
`;
export const Title = styled.div`
  color: ${(props) => props.theme.green};
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 57px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    margin-bottom: 4px;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
