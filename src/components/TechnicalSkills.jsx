import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { MdOutlinePsychology } from "react-icons/md";
import { FaPython, FaJava, FaGit } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiCplusplus,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiKeras,
  SiMysql,
  SiMongodb
} from "react-icons/si";

const Container = styled.div`
margin:${props=>props.theme.margin} 0;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100px;

  padding: ${(props) => props.theme.padding.l};

  & h2 {
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.primary};
    text-align: center;
  }
`;

const Skills = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  display: flex;
  width: 90px;
  height: 22px;
  background: ${(props) => props.theme.primary};
  margin: ${(props) => props.theme.padding.a};

  padding: ${(props) => props.theme.padding.l};
  border-radius: ${(props) => props.theme.radius};
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.h2};

  & svg {
    flex: 17px;
    color: ${(props) => props.theme.secondary};
    padding: ${(props) => props.theme.padding.l};
  }

  & h3 {
    flex: 60px;
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.secondary};
    width: 100%;
    font-size: ${(props) => props.theme.fontSize.h5};
    font-weight: 500;
    text-align: center;
    padding: ${(props) => props.theme.padding.l}
      ${(props) => props.theme.padding.l};
    /* border-radius: ${(props) => props.theme.padding.l}; */
  }
`;

export default function TechnicalSkills() {
  return (
    <>
      <Heading>
        <MdOutlinePsychology />
        <span>Technical Skills</span>
      </Heading>
      <Container>
        <Languages>
          <h2>Programming Languages</h2>
          <Skills>
            {" "}
            <Skill>
              <FaPython />
              <h3>Python</h3>
            </Skill>
            <Skill>
              <DiJavascript1 />
              <h3>Javascript</h3>
            </Skill>
            <Skill>
              <FaJava />
              <h3>Java</h3>
            </Skill>
            <Skill>
              <SiCplusplus />
              <h3>C++</h3>
            </Skill>
          </Skills>
        </Languages>
        <Languages>
          <h2>Frameworks</h2>
          <Skills>
            {" "}
            <Skill>
              <SiScikitlearn />
              <h3>Sklearn</h3>
            </Skill>
            <Skill>
              <SiNumpy />
              <h3>Numpy</h3>
            </Skill>
            <Skill>
              <SiKeras />
              <h3>Keras</h3>
            </Skill>
            <Skill>
              <SiPandas />
              <h3>Pandas</h3>
            </Skill>
          </Skills>
        </Languages>
        <Languages>
          <h2>Database</h2>
          <Skills>
            <Skill>
              <SiMysql />
              <h3>MySQL</h3>
            </Skill>
            <Skill>
              <SiMongodb />
              <h3>MongoDB</h3>
            </Skill>
          </Skills>
        </Languages>
        <Languages>
          <h2>Version Control</h2>
          <Skills>
            <Skill>
              <FaGit />
              <h3>Git</h3>
            </Skill>
          </Skills>
        </Languages>
      </Container>
    </>
  );
}
