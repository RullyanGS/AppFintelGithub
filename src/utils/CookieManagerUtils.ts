import CookieManager from '@react-native-cookies/cookies';

export abstract class CookieManagerUtils {

    public static CHECK_COOKIE_INJECTOR: string = `
    ReactNativeWebView.postMessage("Cookie: " + document.cookie);
    true;
  `;

    public static async getCookies(url: string): Promise<any> {
        return await CookieManager.get(
            url,
            true
        );
    }

    public static async CheckIfCookieExistsToThisUrl(url: string, cookieName: string): Promise<boolean> {
        let cookies = await this.getCookies(url);
        return cookies.hasOwnProperty(cookieName);
    }
}