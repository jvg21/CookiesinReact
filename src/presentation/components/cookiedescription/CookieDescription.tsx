import styled from "styled-components";

export const CookieDescription = styled.p<{ fontsize: string, textalign?: string }>`
    font-size: ${props => props.fontsize };
    text-align: ${props => props.textalign ? props.textalign : "left"};
    color: ${(props) => props.color};
`;