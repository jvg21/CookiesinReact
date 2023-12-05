export class Cookie{
    private _id: number = 0;
    private _name : string = "";
    private _description: string = "";
    private _content : string = "";
    private _validity : number = 0;
  

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