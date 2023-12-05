import { useContext } from "react"
import { CookieContext } from "../../../application/context/CookieContext"
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";
import { CookieToggleOption } from "../cookietoggleoption/CookieToggleOption";
import { Cookie } from "../../../application/model/cookie/Cookie";


export function CookieCategoryList(props: { themeConfig: CookieThemeConfig }) {
    const { getCategories, CookieInfoArray, CookieStateArray } = useContext(CookieContext)
    const category = getCategories();

    return (
        <>
            {
                
                CookieInfoArray.map((x, index) => {
                    return (
                        <>
                            <CookieToggleOption
                                key={index}
                                id={x.id}
                                name={x.name}
                                title={x.description}
                                switchState={CookieStateArray[x.id]}
                                cookieThemeConfig={props.themeConfig}
                            />
                        </>
                    )
                })

            }
        </>
    )
}
