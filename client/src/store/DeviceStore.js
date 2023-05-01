import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id:1, name: 'microwave'},
            {id:2, name: 'smartphone'}
        ]
        this._brands = [
            {id:1, name: 'samsung'},
            {id:2, name: 'apple'}
        ]
        this._devices = [
            {id:1, name:'m-2000', price: 200, img: 'data:image/jpeg;base64,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'},
            {id:2, name: 'apple iphone 13', price: 800, img: 'data:image/jpeg;base64,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'}
        ]
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }
    setBrand(brands){
        this._brands = brands;
    }
    setDevice(devices){
        this._devices = devices;
    }

    get types(){
        return this._types;
    }

    get brands(){
        return this._brands;
    }
    get devices(){
        return this._devices;
    }
}