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
    setStateByCategoryId: (index: number, cookieState: boolean) => void,
    getCategoryState:(idCategory:number)=>boolean;
    setAllState: () => void
    saveCookies: () => void,
    // getCategories:()=>string[]

}
const defaultState = {
    CookieStateArray: {},
    setCookieStateArray: (_: CookieState[]) => { },
    // CookieInfoArray : {},
    setStateById: (_: number, __: boolean) => { },
    getStateById: (_: number) => { },
    setStateByCategoryId: (_: number, __: boolean) => { },
    getCategoryState: (_: number) => { },
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
    cookieId: number,
    categoryId: number

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
                CookieState.push({ state: true, cookieId: category.cookies[i].id, categoryId: category.id })
            }
        }
        return CookieState;
    }

    function getCategoryState(idCategory: number) {
        let state = false;

        for (let category of CookieInfoArray) {
            if (idCategory == category.id) {
                for (let cookie of CookieStateArray) {
                    if (category.id === cookie.categoryId) {
                        if (cookie.state) {
                            state = true;
                            break;
                        }
                    }
                }
            }
        }
        return state;
    }

    function setAllState() {
        setCookieStateArray(initCookieStateArray());
    }

    function setStateById(idCookie: number, state: boolean) {
        let CookieState: CookieState[] = [];
        for (let cookieState of CookieStateArray) {
            if (idCookie === cookieState.cookieId) {
                CookieState.push({ state: state, cookieId: cookieState.cookieId, categoryId: cookieState.categoryId })
            } else {
                CookieState.push({ state: cookieState.state, cookieId: cookieState.cookieId, categoryId: cookieState.categoryId })
            }
        }
        setCookieStateArray(CookieState);
    }

    function setStateByCategoryId(idCategory: number, state: boolean) {
        let CookieState: CookieState[] = [];

        for (let cookieState of CookieStateArray) {
            if (idCategory === cookieState.categoryId) {
                CookieState.push({ state: state, cookieId: cookieState.cookieId, categoryId: cookieState.categoryId })
            } else {
                CookieState.push({ state: cookieState.state, cookieId: cookieState.cookieId, categoryId: cookieState.categoryId })
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
        <CookieContext.Provider value={{ CookieStateArray, setCookieStateArray, CookieInfoArray, setAllState, setStateById, getStateById, setStateByCategoryId, getCategoryState,saveCookies }}>
            {children}
        </CookieContext.Provider>
    )
}      