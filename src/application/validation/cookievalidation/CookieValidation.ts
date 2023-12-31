import { Cookie } from "../../model/cookie/Cookie";
import { CookieCategory } from "../../model/cookiecategory/CookieCategory";
import { CookieRepository } from "../../repository/cookierepository/CookieRepository";

export class CookieValidation{
    private _cookieRepository:CookieRepository;

    constructor(){
        this._cookieRepository = new CookieRepository();
    }

    public getListarCookieCategory():CookieCategory[]{
        return this._cookieRepository.getListarCookieCategory();
    }
    public getCookies():Cookie[]{
        return this._cookieRepository.getCookie();
    }
    public salvar(cookie:Cookie){
        this._cookieRepository.salvar(cookie);
    }
}