import React from "react"
import {
  Container,
  Description,
  GradientContainer,
  Title,
  TitleContainer,
} from "./styled.components"

const Gradient = () => {
  const ordinal = (data: number) => {
    switch (data) {
      case 1:
      case 21:
        return data + "st"

      case 2:
      case 22:
        return data + "nd"

      case 3:
      case 23:
        return data + "rd"

      default:
        return data + "th"
    }
  }

  const getTime = () => {
    const currentdate = new Date()
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const datetime = `${month[currentdate.getMonth()]} ${ordinal(
      currentdate.getDate(),
    )}, ${currentdate.getFullYear()} ${
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds()
    }`

    return datetime
  }
  return (
    <Container>
      <GradientContainer></GradientContainer>
      <TitleContainer>
        <Title>
          {"<"} SPE/FRONTEND {">"}
        </Title>
        <Description>{getTime()}</Description>
      </TitleContainer>
    </Container>
  )
}

export default Gradient
