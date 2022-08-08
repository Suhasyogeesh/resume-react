import React from "react";
import Heading from "./Heading";
import { GiStairsGoal } from "react-icons/gi";
import styled from "styled-components";

const Container = styled.div`
  padding: ${(props) => props.theme.padding.a};
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: bold;
  margin:${props=>props.theme.margin} 0;
`;

export default function Objective() {
  return (
    <>
      <Heading>
        <GiStairsGoal />
        <span>Objective</span>
      </Heading>
      <Container>
        I am a passionate learner with a Computer Science major who is
        determinant to improve my learning, knowledge, and skills.
      </Container>
    </>
  );
}
