import {$authHost, $host} from "./index";

export const registration = async (email, password) => {
    const response = await $host.post('api/user/registration',
        {email, password, role:'ADMIN'}
    )
    console.log(response)
    return response;
}

export const login = async (email, password) => {
    const response = await $host.post('api/user/login',
        {email, password}
    )
    console.log(response)
    return response;
}
export const check = async () => {
    const response = await $host.post('api/user/registration');
    return response;
}