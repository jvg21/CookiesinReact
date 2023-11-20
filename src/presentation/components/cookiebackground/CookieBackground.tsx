import styled from "styled-components";
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";

export const CookieBackground = styled.div<{ cookiethemeconfig: CookieThemeConfig; }>`
    background-color: ${(props) => props.cookiethemeconfig.backgroundCardColor};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y:scroll;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;