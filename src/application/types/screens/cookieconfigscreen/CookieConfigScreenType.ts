import { Cookie } from "../../../model/cookie/Cookie"
import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig"

export type CookieConfigScreenType = {
    setConfig: (foo: boolean) => void, 
    arrayCookie : Array<Cookie>,
    themeConfig: CookieThemeConfig
}