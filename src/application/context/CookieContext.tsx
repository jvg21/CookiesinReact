import {Dispatch, ReactNode, SetStateAction, createContext,useState} from 'react'
import { CookieController } from "../controller/cookiecontroller/CookieController";
import Cookies from 'js-cookie';
import { CookieCategory } from '../model/cookiecategory/CookieCategory';

export interface CookieContextInterface{
    cookieInfo : CookieCategory[],
    CookieActive : boolean[],
    setCookieActive: Dispatch<SetStateAction<boolean[]>>,
    modalCookie : boolean,
    setModalCookie : Dispatch<SetStateAction<boolean>>,
    modalCookieConfig:boolean,
    setModalCookieConfig: Dispatch<SetStateAction<boolean>>,
    setCookieValue : (id: number, value: boolean)=>void,
    fillCookieActive:()=>boolean[],
}
const defaultState = {
    
    cookieInfo : {},
    CookieActive : {},
    setCookieActive: (value :boolean[])=>{},
    modalCookie : {},
    setModalCookie : (value :boolean)=>{},
    modalCookieConfig:{},
    setModalCookieConfig: (value :boolean)=>{},
    setCookieValue : (id: number, value: boolean)=>{},
    fillCookieActive: ()=>{}
} as CookieContextInterface

export const CookieContext = createContext(defaultState)

type CookieProviderProps = {
    children:ReactNode
}
export const CookieProvider = ({children}:CookieProviderProps) =>{
    let cookieController = new CookieController();
    let cookieInfo = cookieController.getListarCookies();
    const [CookieActive, setCookieActive] = useState<boolean[]>(fillCookieActive()); 

    const [modalCookie, setModalCookie] = useState(haveActiveCookies()||false); //// modal
    const [modalCookieConfig, setModalCookieConfig] = useState(false); /// pagina de config
    
    function setCookieValue(id: number, value: boolean) {
        let cookieChange: boolean[] = [];
        for (let i = 0; i < CookieActive.length; i++) {
            if (i == id) {
                cookieChange.push(value)
            } else {
                cookieChange.push(CookieActive[i])
            }
        }
        setCookieActive(cookieChange);
    }

    function fillCookieActive() {
        let CookieActiveArray: boolean[] = []
        cookieInfo.forEach(() => {
            CookieActiveArray.push(true)
        })
        return CookieActiveArray;
    }

    function haveActiveCookies(): boolean {
        for (let category of cookieInfo) {
          for (let cookie of category.cookies) {
            if (Cookies.get(cookie.name)) {
              return false;
            }
          }
        }
        return true
      }

    return(
        <CookieContext.Provider value={{cookieInfo,CookieActive,setCookieActive,modalCookie,setModalCookie,modalCookieConfig,setModalCookieConfig,setCookieValue,fillCookieActive}}>
            {children}
        </CookieContext.Provider>
    )
}