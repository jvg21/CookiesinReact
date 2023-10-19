import { Cookie } from "../../model/cookie/Cookie";
import { CookieRepository } from "../../repository/cookierepository/CookieRepository";

export class CookieValidation{
    private _cookieRepository:CookieRepository;
    constructor(){
        this._cookieRepository = new CookieRepository();
    }

    public getListarCookies():Cookie[]{
        return this._cookieRepository.getListarCookies();
    }
}