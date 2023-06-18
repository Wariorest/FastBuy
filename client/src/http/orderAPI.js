import {$authHost, $host} from "./index";

export const fetchOrders = async () => {
    const {data} = await $host.get('api/order')
    return data
}