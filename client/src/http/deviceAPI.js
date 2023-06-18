import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}



export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const makeOrder = async (order)=>{
    const {data} = await $host.post('api/order', order);
    return data;
}

export const delDevice = async (id) => {
    const {data} = await $authHost.post('api/device/del/'+ id)
    return data
}

export const setDescription = async (_id, text) => {
    const {data} = await $authHost.post('api/device/update', _id, text)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 10) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device' + '/'+id)
    return data
}
