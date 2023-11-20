import styled from "styled-components";

export const CookieLink = styled.a<{color: string,fontsize:string}>`
    color: ${(props) => props.color};
    font-size: ${(props => props.fontsize)};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;