export type Actions = {
    Nome: string,
    Descricao: string,
    Situacao: boolean,
    UrlAcao?: string;
    WebView?: boolean;
    Ordenacao?: number;
    Tipo?: number;
    Rota?: string;
    Acoes?: Actions[];
}