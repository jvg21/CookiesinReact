import { CookieInfo } from "../../../model/cookieInfo/CookieInfo";
import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig"

export type CookieConfigScreenType = {
    setConfig: (foo: boolean) => void, 
    themeConfig: CookieThemeConfig,
    setAllCokies: () => void;
    cookieInfo: CookieInfo[];
    cookieState: boolean[];
    changeCookieStateFunction: (id:number,foo:boolean)=>void
}
