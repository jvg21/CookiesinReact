import styled from "styled-components";

export const CookieButton = styled.button<{ BackGround?: string, TextColor?: string, HoverBgColor?: string }>`
    background-color: ${props => props.BackGround ? props.BackGround : "white"};
    color: ${props => props.TextColor ? props.TextColor : "black"};
    width: 80%;
    height: 40px;
    margin: 1% 0;
    border: none;
    border-radius: 5px;
    font-size: larger;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
    overflow: hidden;

    &:hover{
        background-color: ${props => props.HoverBgColor ? props.HoverBgColor : " "};
    }
`;