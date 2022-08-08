import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { GiArchiveResearch } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

const Container = styled.div`
  padding: ${(props) => props.theme.padding.t}
    ${(props) => props.theme.padding.a};
    margin:${props=>props.theme.margin} 0;
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.h3};
  text-align: justify;
  svg {
    margin-top: 2px;
    align-self: flex-start;
    flex: 5%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
`;

export default function Publications() {
  return (
    <>
      <Heading>
        <GiArchiveResearch />
        <span>Publications</span>
      </Heading>
      <Container>
        <Point>
          <GoPrimitiveDot />
          <p>
            {" "}
            Suhas Y, Chandana M S, Lavanya V, Harshitha V and
            Sushma Koushik (August 2021), The {" "}
            <b>
               “Educational Career Recommendation System Using Machine Learning”,
              International Journal of Advanced Research in Computer and
              Communication Engineering (IJARCCE), Volume 10 - Issue 8, ISSN
               (O) 2278-1021, ISSN (P) 2319-5940
            </b>{" "}
            Available online at{" "}
            <a href="https://ijarcce.com/wp-content/uploads/2021/09/IJARCCE.2021.10809.pdf">
             https://ijarcce.com/wp-content/uploads/2021/09/IJARCCE.2021.10809.pdf
            </a>
          </p>
        </Point>
      </Container>
    </>
  );
}
