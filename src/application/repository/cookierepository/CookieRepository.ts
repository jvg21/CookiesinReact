import { Cookie } from "../../model/cookie/Cookie";
import Cookies from 'js-cookie';
import { CookieCategory } from "../../model/cookiecategory/CookieCategory";
import CookieJson from '../../../infrastructure/services/cookies.json';


export class CookieRepository{
    private listaCookies : CookieCategory[] = [];

    constructor(){
        CookieJson.map((x)=>{
            let cookieCategoryArray: Cookie [] = [];
            x.Cookies.map(cookie=>{
              cookieCategoryArray.push(new Cookie(cookie.id,cookie.name,cookie.content,cookie.expireTime))
            })
        
            this.listaCookies.push(new CookieCategory(x.id,x.name,x.descriptions,cookieCategoryArray));
            
          })
    }
    public getListarCookies():CookieCategory[]{
        return this.listaCookies;
    }
    public salvar(cookie:Cookie){
        // this.listaCookies[idCategory].cookies.push(cookie)
        console.log(cookie);
        
        Cookies.set(cookie.name,cookie.content,{expires:cookie.validity})
 
    }
}