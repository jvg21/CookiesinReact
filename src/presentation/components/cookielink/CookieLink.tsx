import styled from "styled-components";

export const CookieLink = styled.a<{mainColor: string}>`
    color: ${(props) => props.mainColor};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;