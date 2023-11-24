import { Cookie } from "../../../model/cookie/Cookie";
import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig";

export type CookieToggleOptionType = { 
    cookie: Cookie;
    switchState?: boolean;
    cookieThemeConfig: CookieThemeConfig;
}