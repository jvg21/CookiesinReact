import styled from "styled-components";

export const CookieDescription = styled.p<{ FontSize?: string, TextAlign?: string }>`
    padding: 1.2vw;
    font-size: ${props => props.FontSize ? props.FontSize : '20px'};
    text-align: ${props => props.TextAlign ? props.TextAlign : "left"};
    color: ${(props) => props.color};
`;