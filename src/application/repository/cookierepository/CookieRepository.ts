import { Cookie } from "../../model/cookie/Cookie";
import Cookies from 'js-cookie';
import CookieJson from '../../../infrastructure/services/cookies.json';
import { CookieCategory } from "../../model/cookiecategory/CookieCategory";


export class CookieRepository{
    private listaCookies : Cookie[] = [];

    constructor(){
        
    }
    
    public getListarCategorias():CookieCategory[]{
        
        let categoryList : CookieCategory[] = [];
        CookieJson.map((category)=>{
            let categoryCookie = new CookieCategory();
            categoryCookie.id = category.id;
            categoryCookie.name = category.name;
            let cookieList: Cookie[]= [];
            category.cookies.map((cookie)=>{
                let newCookie : Cookie = new Cookie();
                newCookie.id = cookie.id;
                newCookie.name = cookie.name;
                newCookie.content = cookie.content;
                newCookie.description = cookie.description;
                newCookie.validity = cookie.validity;

                cookieList.push(newCookie);
            })
            categoryCookie.cookies = cookieList;

            categoryList.push(categoryCookie);
        });
        return categoryList;
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