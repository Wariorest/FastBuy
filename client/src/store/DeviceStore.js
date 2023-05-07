import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [


        ]
        this._brands = [

        ]
        this._devices = [

        ]
        this._totalCount = 0
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrand(brands) {
        this._brands = brands;
    }

    setDevice(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSeectedBrand(brand) {
        this._selectedBrand = brand;
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
    get totalCount() {
        return this._totalCount
    }

}