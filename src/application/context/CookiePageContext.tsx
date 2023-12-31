import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import Cookies from 'js-cookie';
import { Cookie } from '../model/cookie/Cookie';

// const cookieContollName = ''
export interface CookiePageContextInterface {
    modalCookie: boolean,
    setModalCookie: Dispatch<SetStateAction<boolean>>,
    modalCookieConfig: boolean,
    setModalCookieConfig: Dispatch<SetStateAction<boolean>>,
}
const defaultState = {
    modalCookie: {},
    setModalCookie: (_: boolean) => { },
    modalCookieConfig: {},
    setModalCookieConfig: (_: boolean) => { },

} as CookiePageContextInterface

export const CookiePageContext = createContext(defaultState)

type CookiePageProviderProps = {
    children: ReactNode
}
export const CookiePageProvider = ({ children }: CookiePageProviderProps) => {
    let cookies = new CookieController().getCookies();

    const [modalCookie, setModalCookie] = useState(haveActiveCookies() || false); //// modal
    const [modalCookieConfig, setModalCookieConfig] = useState(false); /// pagina de config


    function haveActiveCookies(): boolean {

        let cookies = Cookies.get();
        if(cookies['Cookie_Refresh']){
            return false;
        }
        return true
    }

    return (
        <CookiePageContext.Provider value={{ modalCookie, setModalCookie, modalCookieConfig, setModalCookieConfig }}>
            {children}
        </CookiePageContext.Provider>
    )
}      