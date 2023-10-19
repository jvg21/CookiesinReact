import styled from "styled-components";

export const CookieTitle = styled.h2<{FontSize:string}>`
    font-size: ${(props) =>props.FontSize};
    text-align: center;
    color: ${(props) => props.color};
`;