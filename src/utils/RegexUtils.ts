export abstract class RegexUtils {

    public static GetBaseUrl(url: any) : string {
        return url.match(/^https?:\/\/[^#?\/]+/)[0];
    }
}