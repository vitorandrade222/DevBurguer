import styled from 'styled-components';

import BackgroundHome from '../../assets/backgroud-home.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 457px;

  h1 {
    color: ${(props) => props.theme.white};
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    position: absolute;
    right: 14%;
    top: 10%;
  }
`;
export const Container = styled.section`
  background: url('${BackgroundHome}');
  height: 100%;
`;
