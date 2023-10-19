import styled from "styled-components";

export const CookieDescription = styled.p<{ FontSize: string, TextAlign?: string }>`
    font-size: ${props => props.FontSize };
    text-align: ${props => props.TextAlign ? props.TextAlign : "left"};
    color: ${(props) => props.color};
`;