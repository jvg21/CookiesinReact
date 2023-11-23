export class Cookie{
    private _id: number;
    private _name : string = "";
    private _description: string = "";
    
    private _content : string = "";
    private _validity : number;
  
    constructor(id:number,name:string,description:string,content : string,validityTime : number){
        this._id = id;
        this._name = name;
        this._content = content;
        this._validity = validityTime;
        this._description = description;
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

    get content():string{
        return this._content;
    }
    set content(value:string){
        this._content = value;
    }

    get validity():number{
        return this._validity;
    }
    set validity(value : number){
        this._validity = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

}