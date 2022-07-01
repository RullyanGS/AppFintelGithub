import { styles } from './Styles';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { WebViewListType } from '../../../Types/WebViewListType';
import HorizontalCardWebViewAction from '../../../Components/HorizontalCardWebViewAction/HorizontalCardWebViewAction';

export function ActionsList(props: any) {

    const navigation = useNavigation();
    const { headerName, jsonAction }: WebViewListType = props.route.params;

    useLayoutEffect(() => {
        navigation.setOptions({title: headerName});
      }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {JSON.parse(jsonAction)
                    .filter((action: any) => action.Situacao)
                    .map((item: any, index: number) => (<HorizontalCardWebViewAction key={index} title={item.Nome} controller={item.UrlAcao} />))}
            </ScrollView>
        </SafeAreaView>
    )

}

export default ActionsList;