import { Cookie } from "../../model/cookie/Cookie";
import { CookieValidation } from "../../validation/cookievalidation/CookieValidation";

export class CookieController{

    private _cookieValidation:CookieValidation;
    constructor(){
        this._cookieValidation = new CookieValidation();
    }
    public getListarCookies():Cookie[]{
        return this._cookieValidation.getListarCookies();
    }
    public salvar(cookie:Cookie){
        this._cookieValidation.salvar(cookie);
    }
   
}