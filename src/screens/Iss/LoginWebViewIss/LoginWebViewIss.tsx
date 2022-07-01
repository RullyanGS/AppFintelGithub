import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import React, { createRef, useLayoutEffect } from 'react';
import { NativeSyntheticEvent, SafeAreaView } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { NativeLoginUtils } from '../../../utils/NativeLoginUtils';
import { CookieManagerUtils } from '../../../utils/CookieManagerUtils';
import { WebViewMessage } from 'react-native-webview/lib/WebViewTypes';
import { LoginWebViewIssType } from '../../../Types/LoginWebViewIssType';
import { RequestInLoadWithRequest } from '../../../Types/RequestInLoadWithRequest';

type Props = {
    jsonAction: LoginWebViewIssType;
}

export function LoginWebViewIss({ jsonAction }: Props) {

    const navigation = useNavigation();
    let webViewRef = createRef<WebView>();

    useLayoutEffect(() => {
        navigation.setOptions({ title: jsonAction.Login.Title });
    }, [navigation]);

    const injectCookiesInRequestWithJavascriptInEveryNavigationChange = (navigationState: WebViewNavigation) => {
        if (webViewRef.current) {
            webViewRef.current.injectJavaScript(CookieManagerUtils.CHECK_COOKIE_INJECTOR);
        }
    };

    const InjectStoredCookies = async (event: NativeSyntheticEvent<WebViewMessage>) => {
        const { data } = event.nativeEvent;

        const storedCookies = await CookieManagerUtils.getCookies(jsonAction.Login.UrlCookie);

        if (data.includes('Cookie:'))
            storedCookies;
    };

    const CheckLoginStatusEveryPageRequest = (request: RequestInLoadWithRequest): boolean => {

        const checkIfAlreadyLoggedIn = async () => {
            const checkLogInCookies: boolean = await CookieManagerUtils.CheckIfCookieExistsToThisUrl(jsonAction.Login.UrlCookie
                , jsonAction.Cookies.CookieAutenticacaoDaAplicacao);

            if (checkLogInCookies) {
                await NativeLoginUtils.SaveCountyWithNativeLogin(jsonAction.ibgeCode);
                navigation.navigate('Home' as never);
            }
        }

        checkIfAlreadyLoggedIn();

        return true;
    }

    return (
        <SafeAreaView style={styles.flexContainer}>
            <WebView
                ref={webViewRef}
                startInLoadingState={true}
                source={{ uri: jsonAction.Login.LoginUrl }}
                onNavigationStateChange={injectCookiesInRequestWithJavascriptInEveryNavigationChange}
                onMessage={InjectStoredCookies}
                sharedCookiesEnabled={true}
                thirdPartyCookiesEnabled={true}
                onShouldStartLoadWithRequest={CheckLoginStatusEveryPageRequest}
            />
        </SafeAreaView>
    );
}

export default LoginWebViewIss;
