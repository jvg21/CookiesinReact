import { Cookie } from "../cookie/Cookie";

export class CookieCategory{
    private _id: number = 0;
    private _name: string = "";
    private _cookies: Cookie[] = [];

    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get cookies(): Cookie[] {
        return this._cookies;
    }
    public set cookies(value: Cookie[]) {
        this._cookies = value;
    }

}