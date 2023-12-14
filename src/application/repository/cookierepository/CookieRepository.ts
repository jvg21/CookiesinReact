import { Cookie } from "../../model/cookie/Cookie";
import Cookies from 'js-cookie';
import CookieJson from '../../../infrastructure/services/cookies.json';
import { CookieCategory } from "../../model/cookiecategory/CookieCategory";

export class CookieRepository{
    private listaCookies : CookieCategory[] = [];

    constructor(){
        let categoryList : CookieCategory[] = [];
        CookieJson.map((category)=>{
            let categoryCookie = new CookieCategory();
            categoryCookie.id = category.id;
            categoryCookie.name = category.name;
            categoryCookie.description = category.description;
            let cookieList: Cookie[] = [];
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
        this.listaCookies = categoryList;
    }
    
    public getListarCookieCategory():CookieCategory[]{
        return this.listaCookies;
    }

    public getCookie():Cookie[]{
        let cookieList : Cookie[] = [];
        this.listaCookies.map((cookiecategory)=>{
            cookiecategory.cookies.map((cookie)=>{
                cookieList.push(cookie)
            })
        })
        return cookieList;
    }
    
    public salvar(cookie:Cookie){
        console.log(cookie);
        Cookies.set(cookie.name,cookie.content,{expires:cookie.validity})
    }
}