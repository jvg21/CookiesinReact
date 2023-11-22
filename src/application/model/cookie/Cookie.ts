export class Cookie{
    private _id: number;
    private _name : string = "";
    private _description : string = "";
    private _validity : number;
    private _active: boolean = false;
  
    constructor(id:number,name:string,description : string,validityTime : number,active:boolean){
        this._id = id;
        this._name = name;
        this._description = description;
        this._validity = validityTime;
        this._active = active;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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

    public get active(): boolean {
        return this._active;
    }
    public set active(value: boolean) {
        this._active = value;
    }


}