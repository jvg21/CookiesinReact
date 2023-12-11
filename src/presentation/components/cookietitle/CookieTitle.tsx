import styled from "styled-components";

export const CookieTitle = styled.h2<{fontSize:string,color:string}>`
    font-size: ${(props) =>props.fontSize};
    text-align: center;
    color: ${(props) => props.color};
`;