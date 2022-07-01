import { CountyManager } from './CountyManager';
import CookieManager from '@react-native-cookies/cookies';
import { CookieManagerUtils } from './CookieManagerUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export abstract class NativeLoginUtils {

    public static async SaveCountyWithNativeLogin(ibgeCode: number) {
        try {
            await AsyncStorage.setItem('HasAnyNativeLogin', ibgeCode.toString());
        } catch { }
    }

    public static async RemoveNativeLoginData(): Promise<void> {
        CookieManager.clearAll();
        try {
            await AsyncStorage.removeItem('HasAnyNativeLogin');
        } catch { }
    }

    public static async GetIbgeCodeFromLoggedCounty(): Promise<string | null> {
        const ibgeCodeFromLoggedCounty = await AsyncStorage.getItem('HasAnyNativeLogin');

        if(ibgeCodeFromLoggedCounty !== null) {
            let loggedCounty = await CountyManager.GetCountyByIbgeCode(ibgeCodeFromLoggedCounty);
            let checkCookieExistenceForThisIbgeCode = await CookieManagerUtils.CheckIfCookieExistsToThisUrl(
                loggedCounty.UrlAplicacao as string
                , loggedCounty.Cookies?.CookieAutenticacaoDaAplicacao as string)
            
            if(checkCookieExistenceForThisIbgeCode){
                return ibgeCodeFromLoggedCounty;
            } else {
                this.RemoveNativeLoginData();
            }
        }

        return null;
    }
}