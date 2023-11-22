import { CookieCategory } from "../../../model/cookiecategory/CookieCategory";
import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig"

export type CookieConfigScreenType = {
    setConfig: (foo: boolean) => void, 
    themeConfig: CookieThemeConfig,
    setAllCokies: () => void;
    cookieInfo: CookieCategory[];
    cookieState: boolean[];
    changeCookieStateFunction: (id:number,foo:boolean)=>void
}
