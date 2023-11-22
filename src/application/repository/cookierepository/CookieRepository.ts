import { Cookie } from "../../model/cookie/Cookie";
import Cookies from 'js-cookie';

export class CookieRepository{
    private listaCookies : Cookie[] = [];

    constructor(){
    }
    public getListarCookies():Cookie[]{
        return this.listaCookies;
    }
    public salvar(cookie:Cookie){
        this.listaCookies.push(cookie);
        console.log(cookie);
        
        Cookies.set(cookie.name,"teste",{expires:cookie.validity})
 
    }
}