import React from "react";
import Heading from "./Heading";
import { HiAcademicCap } from "react-icons/hi";
import styled from "styled-components";
import Badge from "./Badge";

const College = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${(props) => props.theme.padding.a};
  margin:${props=>props.theme.margin} 0;
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.fontSize.h3};
  & h3 {
    color: ${(props) => props.theme.primary};
  }
`;

const GPA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

export default function Academic() {
  return (
    <>
      <Heading>
        <HiAcademicCap /> <span>Academic Credentials</span>
      </Heading>
      <College>
        <Name>
          <h3>Bachelor of Engineering, Computer Science</h3>
          <p>Maharaja Institute of Technology Mysore</p>
        </Name>

        <GPA>
          <Badge style={{ width: "66px", textAlign: "center" }}>
            CGPA:7.68
          </Badge>
          2021
        </GPA>
      </College>
      <College>
        <Name>
          <h3>II PUC / 12th Grade </h3>
          <p>Navkis Pu Academy, Mysore</p>
        </Name>

        <GPA>
          <Badge style={{ width: "66px", textAlign: "center" }}>73.00%</Badge>
          2017
        </GPA>
      </College>
      <College>
        <Name>
          <h3>SSLC / 10th Grade</h3>
          <p>De Paul Public School, Mysore</p>
        </Name>

        <GPA>
          <Badge style={{ width: "66px", textAlign: "center" }}>7.2 CGPA</Badge>
          2015
        </GPA>
      </College>
    </>
  );
}
