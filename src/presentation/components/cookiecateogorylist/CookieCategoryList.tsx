import { useContext } from "react"
import { CookieContext } from "../../../application/context/CookieContext"
import { CookieThemeConfig } from "../../../application/model/cookiethemeconfig/CookieThemeConfig";

export function CookieCategoryList(props: { themeConfig: CookieThemeConfig }) {
    const { getCategories, CookieInfoArray } = useContext(CookieContext)
    const category = getCategories();

    function teste(){
        category.map((x)=>{
            CookieInfoArray.map((cookie)=>{
            console.log(x +' |---| '+ cookie.category);
            /////////retornar o arranjo da categoria\\\\\\\\\\
            })
        })
    }
    return (
        <>
            {
                teste()
            }
        </>
    )
}

// CookieInfoArray.map((cookie, index) => {
//     if (cookie.category === x){
        
//             // <div>
//             //     <p>{x}</p>
//             //     <CookieToggleOption
//             //         key={index}
//             //         id={cookie.id}
//             //         name={cookie.name}
//             //         title={cookie.description}
//             //         switchState={CookieStateArray[cookie.id]}
//             //         cookieThemeConfig={props.themeConfig}
//             //     />
//             // </div>
//     }
    
// })