import { CookieState } from "../../../model/cookiestate/CookieState"
import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig"

export type CookieConfigScreenType = {
    setConfig: (foo: boolean) => void, 
    arrayCookie : Array<CookieState>,
    themeConfig: CookieThemeConfig
    saveCookies: (foo : boolean[])=>void
}