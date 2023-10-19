import styled from "styled-components";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";

export const CookieBody = styled.div<{ cookieThemeConfig: CookieThemeConfig }>`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 90%;
    overflow-y:auto;

    
    /* SCROLLBAR MOD */
        &::-webkit-scrollbar {
            background: ${(props) => props.cookieThemeConfig.backgroundColor}; //fundo
            width: 3px;
            height: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${(props) => props.cookieThemeConfig.primaryAccentColor}; //barra
        }
`;