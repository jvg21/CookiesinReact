import styled from "styled-components";

export const CookieLink = styled.a<{color: string,fontSize:string}>`
    color: ${(props) => props.color};
    font-size: ${(props => props.fontSize)};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;