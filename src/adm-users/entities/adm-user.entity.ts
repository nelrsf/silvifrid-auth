export class AdmUser {

    private __id: string;
    private _userName: string;
    private _name: string;
    private _position: string;
    private _rolId: number;
    private _password: string;


    public get _id(): string {
        return this.__id;
    }
    public set _id(value: string) {
        this.__id = value;
    }

    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }

    public get rolId(): number {
        return this._rolId;
    }
    public set rolId(value: number) {
        this._rolId = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}
