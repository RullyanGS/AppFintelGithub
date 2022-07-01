import { Cookies } from "./JsonAutoatendimento/Cookies";
import { Login } from "./JsonAutoatendimento/Login";

export type LoginOptionsType = {
    loginConfig?: Login[];
    cookies?: Cookies;
    ibgeCode: number
}