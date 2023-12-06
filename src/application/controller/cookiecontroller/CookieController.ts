import { Cookie } from "../../model/cookie/Cookie";
import { CookieCategory } from "../../model/cookiecategory/CookieCategory";
import { CookieValidation } from "../../validation/cookievalidation/CookieValidation";

export class CookieController{

    private _cookieValidation:CookieValidation;
    constructor(){
        this._cookieValidation = new CookieValidation();
    }
    public getListarCookieCategory():CookieCategory[]{
        return this._cookieValidation.getListarCookieCategory();
    }
    public getCookies():Cookie[]{
        return this._cookieValidation.getCookies();
    }
    public salvar(cookie:Cookie){
        this._cookieValidation.salvar(cookie);
    }
   
}