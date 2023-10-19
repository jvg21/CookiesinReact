import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig";

export type CookieToggleOptionType = { 
    name: string;
    title: string;
    switchState?: boolean;
    switchFunction?: (foo: boolean) => void;
    cookieThemeConfig: CookieThemeConfig;
}