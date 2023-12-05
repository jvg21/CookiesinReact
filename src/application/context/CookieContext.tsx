import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import { Cookie } from '../model/cookie/Cookie';
import { CookieCategory } from '../model/cookiecategory/CookieCategory';

export interface CookieContextInterface {
    CookieStateArray: boolean[],
    setCookieStateArray: Dispatch<SetStateAction<boolean[]>>,
    CookieInfoArray : Cookie[],
    setCookieStateByIndex:(index: number, value: boolean)=>void,
    setCookieStateByCategory:(category:string,value:boolean)=>void,
    setAllCookieState:(value:boolean)=>void
    saveCookies:()=>void,
    getCategories:()=>string[]
    
}
const defaultState = {
    CookieStateArray: {},
    setCookieStateArray: (_: boolean[]) => { },
    CookieInfoArray : {},
    setCookieStateByIndex:(_: number, __: boolean)=>{},
    setCookieStateByCategory:(_:string,__:boolean)=>{},
    setAllCookieState:(_:boolean)=>{},
    saveCookies:()=>{},
    getCategories:()=>{}

} as CookieContextInterface

export const CookieContext = createContext(defaultState)

type CookieProviderProps = {
    children: ReactNode
}
export const CookieProvider = ({ children }: CookieProviderProps) => {
    let cookieInfo = new CookieController();

    const [CookieStateArray,setCookieStateArray] = useState<boolean[]>(initCookieStateArray())
    const [CookieInfoArray,setCookieInfoArray] = useState<CookieCategory[]>(initCookieInfoArray())

    function initCookieInfoArray(){
        return cookieInfo.getListarCookies();
    }
    function initCookieStateArray(){

    }
    
    return (
        <CookieContext.Provider value={{CookieStateArray,setCookieStateArray}}>
            {children}
        </CookieContext.Provider>
    )
}      