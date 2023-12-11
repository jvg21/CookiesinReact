import styled from "styled-components";

export const CookieButton = styled.button<{ background?: string, textcolor?: string, hoverbgcolor?: string,hovertextcolor?:string}>`
    background-color: ${props => props.background ? props.background : "white"};
    color: ${props => props.textcolor ? props.textcolor : "black"};
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: larger;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
    overflow: hidden;
    margin: 3.5px;

    &:hover{
        background-color: ${props => props.hoverbgcolor ? props.hoverbgcolor : " "};
        color: ${props => props.hovertextcolor ? props.hovertextcolor : " "};
    }
`;