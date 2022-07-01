import { Actions } from "./Actions";
import { Contacts } from "./Contacts";
import { Cookies } from "./Cookies";
import { Login } from "./Login";

export type County = {
    Nome: string;
    UrlAplicacao?: string;
    Situacao: boolean;
    CodigoIbge: string;
    Nativo?: boolean;
    Cookies?: Cookies; 
    Login?: Login;
    Acoes?: Actions[];
    Contatos?: Contacts;
}