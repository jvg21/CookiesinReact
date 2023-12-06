import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import { CookieCategory } from '../model/cookiecategory/CookieCategory';

export interface CookieContextInterface {
    CookieStateArray: CookieState[],
    setCookieStateArray: Dispatch<SetStateAction<CookieState[]>>,
    CookieInfoArray : CookieCategory[],
    // setCookieStateByIndex:(index: number, value: boolean)=>void,
    // setCookieStateByCategory:(category:string,value:boolean)=>void,
    // setAllState:()=>void
    // saveCookies:()=>void,
    // getCategories:()=>string[]
    
}
const defaultState = {
    CookieStateArray: {},
    setCookieStateArray: (_: CookieState[]) => { },
    // CookieInfoArray : {},
    // setCookieStateByIndex:(_: number, __: boolean)=>{},
    // setCookieStateByCategory:(_:string,__:boolean)=>{},
    // setAllState:()=>{},
    // saveCookies:()=>{},
    // getCategories:()=>{}

} as CookieContextInterface

export const CookieContext = createContext(defaultState)

type CookieProviderProps = {
    children: ReactNode
}
type CookieState = {
    state: boolean,
    cookieId:number
}
export const CookieProvider = ({ children }: CookieProviderProps) => {
    let cookieInfo = new CookieController();

    const [CookieInfoArray,setCookieInfoArray] = useState<CookieCategory[]>(initCookieInfoArray())
    const [CookieStateArray,setCookieStateArray] = useState<CookieState[]>(initCookieStateArray())

    function initCookieInfoArray(){
        return cookieInfo.getListarCookieCategory();
    }
    function initCookieStateArray(){
        let CookieState: CookieState[] = [];
        for(let category of CookieInfoArray){
            for(let i = 0;i<category.cookies.length;i++){
                CookieState.push({state:true,cookieId:category.cookies[i].id})
            }
        }
        return CookieState;
    }

    return (
        <CookieContext.Provider value={{CookieStateArray,setCookieStateArray,CookieInfoArray}}>
            {children}
        </CookieContext.Provider>
    )
}      