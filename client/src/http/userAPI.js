import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration',
        {email, password, role:'ADMIN'}
    )
    //console.log(data.token)
    return jwtDecode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login',
        {email, password}
    )
    //console.log(response)
    return jwtDecode(data.token);
}
export const check = async () => {
    const response = await $host.post('api/user/registration');
    return response;
}