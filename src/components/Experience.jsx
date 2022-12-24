import React from "react";
import Heading from "./Heading";
import { MdOutlineWorkOutline } from "react-icons/md";
import styled from "styled-components";
import Badge from "./Badge";
import Point from "./Point";

const Content = styled.div`
  display: grid;
  grid-template-areas:
    "role duration"
    "work work";
  padding: ${(props) => props.theme.padding.a};
  font-size: ${(props) => props.theme.fontSize.h3};
`;

const Role = styled.div`
  grid-area: role;

  & h3 {
    color: ${(props) => props.theme.primary};
  }
`;

const Duration = styled.div`
  grid-area: duration;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Work = styled.div`
  grid-area: work;
  font-size: ${(props) => props.theme.fontSize.h3};
  background: ${(props) => props.theme.overlay};
`;

export default function Experience() {
  return (
    <>
      <Heading>
        <MdOutlineWorkOutline /> <span>Experience</span>
      </Heading>

      <Content>
        <Role>
          <h3>Production Software Engineer 1</h3>
          <p>Oracle Cerner, Bengaluru</p>
        </Role>
        <Duration>
          <Badge style={{ width: "113px", textAlign: "center" }}>
            Aug 2021 - Dec 2022
          </Badge>
        </Duration>
        <Work>
          <Point>
            Troubleshoot and analyse basic technical coding issues submitted by internal or external clients.
          </Point>
          <Point> Own, debug, and document investigations and including modifying exiting software code.</Point>
          <Point>Perform root-cause analysis with clients to resolve issues.</Point>
        </Work>
      </Content>

      <Content>
        <Role>
          <h3>Web Developer Intern</h3>
          <p>Manswi Infotech Pvt Ltd, Mysuru</p>
        </Role>
        <Duration>
          <Badge style={{ width: "113px", textAlign: "center" }}>
            July 2020 - Aug 2020
          </Badge>
        </Duration>
        <Work>
          <Point>Designed and developed responsive websites.</Point>
          <Point>
            Designed websites using Wordpress.
          </Point>
          <Point>
            Designed and developed official website of Manswi Infotech.
          </Point>
        </Work>
      </Content>
    </>
  );
}
