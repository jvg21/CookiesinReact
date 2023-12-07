import { useContext, useState } from "react"
import { CookieContext } from "../../../application/context/CookieContext"
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { CookieToggleOption } from "../cookietoggleoption/CookieToggleOption";
import { Cookie } from "../../../application/model/cookie/Cookie";

export function CookieCategoryList(props: { themeConfig: CookieThemeConfig, cookieList: Cookie[] }) {
    const { getStateById } = useContext(CookieContext)

    return (
        <>
            {
                props.cookieList.map((cookie, index) => {
                    return (
                        <>
                            <CookieToggleOption
                                key={index}
                                id={cookie.id}
                                name={cookie.name}
                                title={cookie.description}
                                switchState={getStateById(cookie.id)}
                                cookieThemeConfig={props.themeConfig}
                            />

                        </>)

                })

            }
        </>
    )
}
