import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig";

export type CookieAcceptScreenType = { 
    setConfig: (foo: boolean) => void, 
    themeConfig: CookieThemeConfig;
    saveCookies: (foo : boolean[])=>void

}