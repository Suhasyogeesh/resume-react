import styled from "styled-components";

const Badge=styled.span`
    background:${props=>props.theme.primary};
    color:${props=>props.theme.overlay};
    font-size:${props=>props.theme.fontSize.h4};
    font-weight:700;
    padding:${props=>props.theme.padding.a};  
    border-radius:${props=>props.theme.radius};  
    margin-left:${props=>props.theme.padding.a}
`;

export default Badge;