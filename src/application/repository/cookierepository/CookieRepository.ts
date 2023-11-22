import { Cookie } from "../../model/cookie/Cookie";

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
 
    }
}