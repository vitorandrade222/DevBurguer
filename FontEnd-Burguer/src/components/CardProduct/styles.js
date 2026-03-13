import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-radius: 28.48px;
  background-color: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    font-family: 'Poppins', sans-serif;

    p {
      color: ${(props) => props.theme.orange};
      font-size: 18px;
      line-height: 81%;
      font-weight: 700;
      margin-top: 40px;
    }

    strong {
      color: ${(props) => props.theme.black};
      font-size: 18px;
      font-weight: bold;
      line-height: 30px;
    }
  }

  img {
    transform: rotate(-0.03turn);
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
`;
