import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import { Cookie } from '../model/cookie/Cookie';

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
    const [CookieInfoArray,setCookieInfoArray] = useState<Cookie[]>(initCookieInfoArray())

    function initCookieInfoArray(){
        let cookieArray : Cookie[] = [];
        cookieInfo.getListarCookies().map((cookie)=>{
            cookieArray.push(cookie)
        })
        return cookieArray;
    }

    function initCookieStateArray(){
        let CookieStateArray: boolean[] = []
        cookieInfo.getListarCookies().forEach(()=>{
            CookieStateArray.push(true);
        })
        return CookieStateArray;
    }

    function setCookieStateByIndex(index: number, value: boolean) {
        let cookieChange: boolean[] = [];
        for (let i = 0; i < CookieStateArray.length; i++) {
            if (i == index) {
                cookieChange.push(value)
            } else {
                cookieChange.push(CookieStateArray[i])
            }
        }
        setCookieStateArray(cookieChange);
    }

    function setCookieStateByCategory(category:string,value:boolean){
        let cookieChange: boolean[] = [];
        for (let i = 0; i < CookieInfoArray.length; i++) {
            if (CookieInfoArray[i].category == category.toUpperCase()) {
                cookieChange.push(value);
            } else {
                cookieChange.push(CookieStateArray[i]);
            }
        }
        setCookieStateArray(cookieChange);
    }

    function setAllCookieState(value:boolean){
        let cookieChange: boolean[] = [];
        for (let i = 0; i < CookieStateArray.length; i++) {
            cookieChange.push(value);
        }
        setCookieStateArray(cookieChange);
    }

    function saveCookies(){
        for(let i = 0 ; i<CookieStateArray.length;i++){
            if(CookieStateArray[i]){
                cookieInfo.salvar(CookieInfoArray[i]);
            }
        }
    }

    function getCategories(){
        let Categories : string[] = [];
        for(let cookie of CookieInfoArray){
            if( !Categories.includes(cookie.category) ){
                Categories.push(cookie.category)
            }
            
        }
        return Categories;
    }

    return (
        <CookieContext.Provider value={{CookieStateArray,setCookieStateArray,CookieInfoArray, setCookieStateByIndex, setCookieStateByCategory ,setAllCookieState,saveCookies,getCategories }}>
            {children}
        </CookieContext.Provider>
    )
}      