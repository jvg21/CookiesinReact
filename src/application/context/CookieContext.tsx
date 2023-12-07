import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import { CookieCategory } from '../model/cookiecategory/CookieCategory';
import { Cookie } from '../model/cookie/Cookie';

export interface CookieContextInterface {
    CookieStateArray: CookieState[],
    setCookieStateArray: Dispatch<SetStateAction<CookieState[]>>,
    CookieInfoArray: CookieCategory[],
    setStateById: (index: number, cookieState: boolean) => void,
    getStateById: (id: number) => boolean,
    // setCookieStateByCategory:(category:string,value:boolean)=>void,
    setAllState: () => void
    saveCookies: () => void,
    // getCategories:()=>string[]

}
const defaultState = {
    CookieStateArray: {},
    setCookieStateArray: (_: CookieState[]) => { },
    // CookieInfoArray : {},
    setStateById: (_: number, __: boolean) => { },
    getStateById: (id: number) => { },
    // setCookieStateByCategory:(_:string,__:boolean)=>{},
    setAllState: () => { },
    saveCookies: () => { },
    // getCategories:()=>{}

} as CookieContextInterface

export const CookieContext = createContext(defaultState)

type CookieProviderProps = {
    children: ReactNode
}
type CookieState = {
    state: boolean,
    cookieId: number
}

export const CookieProvider = ({ children }: CookieProviderProps) => {
    let cookieInfo = new CookieController();

    const [CookieInfoArray, setCookieInfoArray] = useState<CookieCategory[]>(initCookieInfoArray())
    const [CookieStateArray, setCookieStateArray] = useState<CookieState[]>(initCookieStateArray())

    function initCookieInfoArray() {
        return cookieInfo.getListarCookieCategory();
    }
    function initCookieStateArray() {
        let CookieState: CookieState[] = [];
        for (let category of CookieInfoArray) {
            for (let i = 0; i < category.cookies.length; i++) {
                CookieState.push({ state: true, cookieId: category.cookies[i].id })
            }
        }

        return CookieState;
    }
    function setAllState() {
        setCookieStateArray(initCookieStateArray());
    }

    function setStateById(id: number, state: boolean) {
        let CookieState: CookieState[] = [];
        for (let cookieState of CookieStateArray) {
            if (id === cookieState.cookieId) {
                CookieState.push({ state: state, cookieId: cookieState.cookieId })
            } else {
                CookieState.push({ state: cookieState.state, cookieId: cookieState.cookieId })
            }
        }
        setCookieStateArray(CookieState);
    }

    function getStateById(id: number) {
        for (let cookieState of CookieStateArray) {
            if (id === cookieState.cookieId) {
                return cookieState.state;
            }
        }
        return true;
    }

    function saveCookies() {
        for (let cookieCategory of CookieInfoArray) {
            for (let cookie of cookieCategory.cookies) {

                if (getStateById(cookie.id)) {
                    let novoCookie = new Cookie();
                    novoCookie.id = cookie.id;
                    novoCookie.name = cookie.name;
                    novoCookie.description = cookie.description;
                    novoCookie.validity = cookie.validity;
                    novoCookie.content = cookie.content;

                    cookieInfo.salvar(novoCookie);
                }


            }
        }
    }

    return (
        <CookieContext.Provider value={{ CookieStateArray, setCookieStateArray, CookieInfoArray, setAllState, setStateById, getStateById, saveCookies }}>
            {children}
        </CookieContext.Provider>
    )
}      