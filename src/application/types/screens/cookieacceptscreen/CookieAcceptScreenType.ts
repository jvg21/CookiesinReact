import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig";

export type CookieAcceptScreenType = { 
    themeConfig: CookieThemeConfig;
    acceptCookies: () => void;

}