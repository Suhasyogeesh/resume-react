import React from "react";
import Heading from "./Heading";
import { BsPersonFill } from "react-icons/bs";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

const Container = styled.div`
  font-size: ${(props) => props.theme.fontSize.h3};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: ${(props) => props.theme.padding.t};
  height: 20rem;
  margin:${props=>props.theme.margin} 0;

  & div:nth-of-type(2) {
    justify-content: space-between;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Table = styled.table`
  border-spacing: 0 ${(props) => props.theme.padding.l};
`;

const Table2 = styled.table`
  border-spacing: ${(props) => props.theme.padding.l};

  & td,
  & th {
    border-radius: ${(props) => props.theme.radius};
    text-align: center;
  }
`;

const Tr = styled.tr`
  text-align: left;
`;

const Th = styled.th`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};

  padding: ${(props) => props.theme.padding.l};
  border-color: ${(props) => props.theme.primary};
  border-width: ${(props) => props.theme.padding.l};
  border-style: solid;
  margin-bottom: ${(props) => props.theme.padding.l};
  border-radius: ${(props) => props.theme.radius} 0 0
    ${(props) => props.theme.radius};
`;

const Td = styled.td`
  padding: ${(props) => props.theme.padding.l};
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  border-style: solid;
  border-width: ${(props) => props.theme.padding.l};
  border-color: ${(props) => props.theme.primary};
  border-radius: 0 ${(props) => props.theme.radius}
    ${(props) => props.theme.radius} 0;
  font-weight: 600;
`;

export default function BioData() {
  return (
    <>
      <Heading>
        <BsPersonFill />
        <span>Personal Details</span>
      </Heading>
      <Container>
        <Info>
          <h3>Bio Data</h3>
          <Table>
            <Tr>
              <Th>DOB</Th>
              <Td>18 November 1999</Td>
            </Tr>
            <Tr>
              <Th>Gender</Th>
              <Td>Male</Td>
            </Tr>
            <Tr>
              <Th>Nationality</Th>
              <Td>Indian</Td>
            </Tr>
            <Tr>
              <Th>Father's Name</Th>
              <Td>Yogeesh M</Td>
            </Tr>
            <Tr>
              <Th>Mother's Name</Th>
              <Td>Latha K</Td>
            </Tr>
            <Tr>
              <Th>Passport No.</Th>
              <Td>V1763020</Td>
            </Tr>
          </Table>
        </Info>

        <Info>
          <h3>Language Proficiency</h3>
          <Table2>
            <Tr>
              <Td></Td>
              <Th>Speak</Th>
              <Th>Read</Th>
              <Th>Write</Th>
            </Tr>
            <Tr>
              <Th>English</Th>
              <Td>
                <AiOutlineCheck />
              </Td>
              <Td>
                <AiOutlineCheck />
              </Td>
              <Td>
                <AiOutlineCheck />
              </Td>
            </Tr>
            <Tr>
              <Th>Hindi</Th>
              <Td>
                <AiOutlineCheck />
              </Td>
              <Td>
                <AiOutlineCheck />
              </Td>
              <Td>
                <AiOutlineCheck />
              </Td>
            </Tr>
            <Tr>
              <Th>Kannada</Th>
              <Td>
                <AiOutlineCheck />
              </Td>
              <Td>
                <AiOutlineCheck />
              </Td>
              <Td>
                <AiOutlineCheck />
              </Td>
            </Tr>
          </Table2>
        </Info>
      </Container>
    </>
  );
}
