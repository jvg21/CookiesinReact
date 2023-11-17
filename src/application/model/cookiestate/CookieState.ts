import { Cookie } from "../cookie/Cookie";

export class CookieState{
    private _cookie: Cookie;
    private _state: boolean = true;
   
    constructor(cookie :Cookie){
        this._cookie = cookie;
    }


    public get cookie(): Cookie {
        return this._cookie;
    }
    public set cookie(value: Cookie) {
        this._cookie = value;
    }
    public get state(): boolean {
        return this._state;
    }
    public set state(value: boolean) {
        this._state = value;
    }


}