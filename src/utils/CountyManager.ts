import { UrlCollection } from "../global/UrlCollection";
import { JsonAutoatendimento } from "../Types/JsonAutoatendimento/JsonAutoatendimento";
import { County } from "../Types/JsonAutoatendimento/County";

export abstract class CountyManager {

    public static async GetCountyConfig() : Promise<JsonAutoatendimento>{
        let data : JsonAutoatendimento | any;

        await fetch(UrlCollection.json_autoatendimento_homologacao)
            .then(function (response) {
                return response.json();
            })
            .then((jsonResponse) => { data = jsonResponse; });

        return data;
    }

    public static async GetCountyOptions() : Promise<any> {
        let countyConfig: JsonAutoatendimento = await this.GetCountyConfig();
        let countys : County[] = countyConfig.Prefeituras.filter((pref: County) => pref.Situacao);

        let len = countys.length,
            countyNames: any = [],
            i;

        for (i = 0; i < len; i += 1) {
            let value = { 'ibgeCode': countys[i].CodigoIbge, 'Nativo': countys[i].hasOwnProperty("Nativo") };
            countyNames.push({ 'label': countys[i].Nome, 'value': value });
        }

        return countyNames;
    }

    public static async GetCountyByIbgeCode(ibgeCode: string) : Promise<County> {
        let county: JsonAutoatendimento = await this.GetCountyConfig();
        return county.Prefeituras.filter((pref: County) => pref.Situacao && pref.CodigoIbge == ibgeCode)[0];
    }
}