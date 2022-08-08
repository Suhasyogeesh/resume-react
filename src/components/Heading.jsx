import React from 'react';
import styled from 'styled-components';

const Title=styled.div`
  background:${props=>props.theme.primary}; 
  color:${props=>props.theme.secondary};  
  padding:${props=>props.theme.padding.l};  
  font-size:${props=>props.theme.fontSize.h2};  
  text-transform:uppercase;
  font-weight:500;
  display:grid;
  grid-template-columns:max-content max-content;
  align-items:center;
  justify-content:center;
  & span{
      padding-left:${props=>props.theme.padding.l}
  }
`;

export default function Heading({children}) {
    return (
        <Title>
            {children}
        </Title>
    )
}
