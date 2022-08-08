import React from 'react';
import Heading from './Heading';
import styled from 'styled-components';
import { GiRibbonMedal } from 'react-icons/gi';
import { SiCoursera, SiCisco } from 'react-icons/si';
import {GrCertificate} from 'react-icons/gr';

const Certification = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: ${(props) => props.theme.padding.t};
`;

const Certificate = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.text};

  & svg {
    font-size: ${(props) => props.theme.fontSize.logo};
    color: ${(props) => props.theme.primary};
  }
`;

const Details = styled.div`

  display: flex;
  flex-direction: column;
  margin:${props=>props.theme.margin} 0;
  margin-left: ${(props) => props.theme.padding.a};
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

export default function Certifications() {
  return (
    <div>
      <Heading>
        <GiRibbonMedal />
        <span>CERTIFICATIONS</span>
      </Heading>
      <Certification>
        <Certificate href='https://www.coursera.org/account/accomplishments/specialization/247HQB67DCTT'>
          <SiCoursera />
          <Details>
            <h3>Machine learning(Specilization)</h3>
            <p>Coursera</p>
          </Details>
        </Certificate>
        <Certificate href='https://drive.google.com/file/d/1uRJX1xtCe4F-QLBU_htG7xthdV_IdeDa/view?usp=sharing'>
          <GrCertificate />
          <Details>
            <h3>DMCP</h3>
            <p>C-DAC, GIST</p>
          </Details>
        </Certificate>
        <Certificate href='https://jovian.ai/verify/MFQTEMZZGYg'>
          <GrCertificate />
          <Details>
            <h3>Data Analysis with Python</h3>
            <p>Jovian</p>
          </Details>
        </Certificate>
      </Certification>
    </div>
  );
}
