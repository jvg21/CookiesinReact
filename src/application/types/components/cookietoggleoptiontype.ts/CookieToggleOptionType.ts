import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig";

export type CookieToggleOptionType = { 
    name: string;
    id:number;
    title: string;
    switchState?: boolean;
    cookieThemeConfig: CookieThemeConfig;
}