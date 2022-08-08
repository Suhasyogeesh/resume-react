import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import styled from "styled-components";

export const StyledPoint = styled.div`
    display:flex;
    align-items:center;
    font-size=${(props) => props.theme.fontSize.h3};
`;

export default function Point({ children }) {
  return (
    <StyledPoint>
      <BsArrowRightShort /> {children}
    </StyledPoint>
  );
}
