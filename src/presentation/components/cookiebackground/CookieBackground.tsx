import styled from "styled-components";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";

export const CookieBackground = styled.div<{ cookieThemeConfig: CookieThemeConfig; }>`
    background-color: ${(props) => props.cookieThemeConfig.backgroundCardColor};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;