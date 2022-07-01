import { styles } from './Styles';
import { WebView } from 'react-native-webview';
import { RegexUtils } from '../../../utils/RegexUtils';
import { useNavigation } from '@react-navigation/native';
import { AppColors } from '../../../../assets/AppColors';
import React, { createRef, useLayoutEffect } from 'react';
import { NativeSyntheticEvent, SafeAreaView } from 'react-native';
import { CookieManagerUtils } from '../../../utils/CookieManagerUtils';
import { WebViewMessage, WebViewNavigation } from 'react-native-webview/lib/WebViewTypes';

export function WebViewIss(props: any) {

    const navigation = useNavigation();
    let webViewRef = createRef<WebView>();
    const { jsonAction, headerName } = props.route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: headerName,
            headerShown: true,
            headerTintColor: AppColors.purpleDark
        });
    }, [navigation]);

    const injectCookiesInRequestWithJavascriptInEveryNavigationChange = (navigationState: WebViewNavigation) => {
        if (webViewRef.current) {
            webViewRef.current.injectJavaScript(CookieManagerUtils.CHECK_COOKIE_INJECTOR);
        }
    };

    const InjectStoredCookies = async (event: NativeSyntheticEvent<WebViewMessage>) => {
        const { data } = event.nativeEvent;
        const storedCookies = await CookieManagerUtils.getCookies(RegexUtils.GetBaseUrl(jsonAction));
        if (data.includes('Cookie:'))
            storedCookies;
    };

    return (
        <SafeAreaView style={styles.flexContainer}>
            <WebView
                ref={webViewRef}
                startInLoadingState={true}
                source={{ uri: jsonAction }}
                onNavigationStateChange={injectCookiesInRequestWithJavascriptInEveryNavigationChange}
                onMessage={InjectStoredCookies}
                sharedCookiesEnabled={true}
                thirdPartyCookiesEnabled={true}
            />
        </SafeAreaView>
    );
}

export default WebViewIss;
