import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import Cookies from 'js-cookie';

export interface CookiePageContextInterface {
    modalCookie: boolean,
    setModalCookie: Dispatch<SetStateAction<boolean>>,
    modalCookieConfig: boolean,
    setModalCookieConfig: Dispatch<SetStateAction<boolean>>,
}
const defaultState = {
    modalCookie: {},
    setModalCookie: (value: boolean) => { },
    modalCookieConfig: {},
    setModalCookieConfig: (value: boolean) => { },

} as CookiePageContextInterface

export const CookiePageContext = createContext(defaultState)

type CookiePageProviderProps = {
    children: ReactNode
}
export const CookiePageProvider = ({ children }: CookiePageProviderProps) => {
    let cookies = new CookieController().getListarCookies();

    const [modalCookie, setModalCookie] = useState(haveActiveCookies() || false); //// modal
    const [modalCookieConfig, setModalCookieConfig] = useState(false); /// pagina de config


    function haveActiveCookies(): boolean {
        for (let cookie of cookies) {
            if (Cookies.get(cookie.name)) {
                return false;
            }
        }
        return true
    }

    return (
        <CookiePageContext.Provider value={{ modalCookie, setModalCookie, modalCookieConfig, setModalCookieConfig }}>
            {children}
        </CookiePageContext.Provider>
    )
}      