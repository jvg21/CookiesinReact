export class Cookie{
    private _name : string = "";
    private _description : string = "";
    private _validity : number;

    constructor(name:string,description : string,validityTime : number){
        this._name = name,
        this._description = description;
        this._validity = validityTime;

    }

    get name():string{
        return this._name;
    }
    set name(value : string){
        this._name = value;
    }

    get description():string{
        return this._description;
    }
    set description(value:string){
        this._description = value;
    }

    get validity():number{
        return this._validity;
    }
    set validity(value : number){
        this._validity = value;
    }

}