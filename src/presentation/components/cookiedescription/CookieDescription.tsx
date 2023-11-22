import styled from "styled-components";

export const CookieDescription = styled.p<{ fontSize: string, textalign?: string }>`
    font-size: ${props => props.fontSize };
    text-align: ${props => props.textalign ? props.textalign : "left"};
    color: ${(props) => props.color};
`;