import { styles } from './Styles';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { createRef, useLayoutEffect } from 'react';

export function WebViewScreen(props: any) {

    const navigation = useNavigation();
    let webViewRef = createRef<WebView>();
    const { siteUrl, headerName } = props.route.params;

    useLayoutEffect(() => {
        navigation.setOptions({title: headerName});
      }, [navigation]);

    return (
        <SafeAreaView style={styles.flexContainer}>
            <WebView
                ref={webViewRef}
                startInLoadingState={true}
                source={{ uri: siteUrl }}
                sharedCookiesEnabled={true}
                thirdPartyCookiesEnabled={true}
            />
        </SafeAreaView>
    );
}

export default WebViewScreen;
