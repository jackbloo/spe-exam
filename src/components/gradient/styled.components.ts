import styled from "styled-components"
export const Container = styled.div``
export const GradientContainer = styled.div`
  background-image: linear-gradient(to right, #00dbde, #fc00ff);
  height: 50vh;
  @media (min-width: 960px) {
    position: relative;
  }
`

export const TitleContainer = styled.div`
  height: 50vh;
  width: 100%;
  @media (min-width: 960px) {
    position: absolute;
    background: #111111;
    top: -300px;
    transform: rotate(-30deg);
    border-radius: 30px;
    border: 10px solid #eeeeee;
  }
`

export const Title = styled.div`
  font-size: 40px;
  color: #00ff00;
  @media (min-width: 960px) {
    position: absolute;
    bottom: 20px;
    left: 70px;
  }
`

export const Description = styled.div`
  font-size: 10px;
  color: #00ff00;
  @media (min-width: 960px) {
    position: absolute;
    top: 190px;
    left: -40px;
    transform: rotate(90deg);
  }
`
