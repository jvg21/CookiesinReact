import styled from "styled-components";

export const CookieTitle = styled.h2<{fontsize:string}>`
    font-size: ${(props) =>props.fontsize};
    text-align: center;
    color: ${(props) => props.color};
`;