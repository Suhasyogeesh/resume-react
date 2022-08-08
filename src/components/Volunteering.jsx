import React from "react";
import Heading from "./Heading";
import { MdVolunteerActivism } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import styled from "styled-components";

const Container = styled.div`
  height: 12rem;
  padding: ${(props) => props.theme.padding.a};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin:${props=>props.theme.margin} 0;
`;

const Point = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.h3};
  text-align: justify;

  & svg {
    margin-top: 2px;
    align-self: flex-start;
    flex: 2%;
  }

  &p {
    flex: 1;
  }
`;

export default function Volunteering() {
  return (
    <>
      <Heading>
        <MdVolunteerActivism />
        <span>Volunteering</span>
      </Heading>
      <Container>
        <Point>
          <GoPrimitiveDot />
          <p>
            Coordinated the event “Kalayaatra 2021”, the intra collegiate
            cultural fest conducted by Department of Computer Science, MITM,
            Mysore June 2021
          </p>
        </Point>

        <Point>
          <GoPrimitiveDot />
          <p>
            Volunteered “Mahadasara” hosted by MITM, Mandya held at Dr. A.P.J.
            Abdul Kalam Open Air Theatre, Mysuru from 20th to 27th February 2018
          </p>
        </Point>
      </Container>
    </>
  );
}
