import styled from "styled-components";

export const CookieLink = styled.a<{Color: string,FontSize:string}>`
    color: ${(props) => props.Color};
    font-size: ${(props => props.FontSize)};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;