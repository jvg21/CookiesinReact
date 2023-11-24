import { Cookie } from "../../model/cookie/Cookie";
import Cookies from 'js-cookie';
import CookieJson from '../../../infrastructure/services/cookies.json';


export class CookieRepository{
    private listaCookies : Cookie[] = [];

    constructor(){
        this.getFromDataBase();
    }
    
    public getFromDataBase(){
        CookieJson.map((x)=>{
            this.listaCookies.push(new Cookie(x.id,x.name,x.description,x.content,x.validity,x.category))            
        })
    }
    public getListarCookies():Cookie[]{
        return this.listaCookies;
    }
    
    public salvar(cookie:Cookie){
        // this.listaCookies[idCategory].cookies.push(cookie)
        console.log(cookie);
        
        Cookies.set(cookie.name,cookie.content,{expires:cookie.validity})
 
    }
}