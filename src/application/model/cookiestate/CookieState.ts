import { Cookie } from "../cookie/Cookie";

export class CookieState{
    private _cookie: Cookie;
    private _state: boolean = true;
   
    constructor(cookie :Cookie){
        this._cookie = cookie;
    }
    public getCookie(): Cookie {
        return this._cookie;
    }
    public setCookie(value: Cookie) {
        this._cookie = value;
    }
    public getState(): boolean {
        return this._state;
    }
    public setState(value: boolean) {
        this._state = value;
    }

    public changeState(){
        if(this.getState()==true){
            this.setState(false)
        }else{
            this.setState(true)
        }
    }


}