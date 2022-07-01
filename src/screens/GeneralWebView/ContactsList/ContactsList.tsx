import { styles } from './Styles';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView } from 'react-native';
import { WebViewListType } from '../../../Types/WebViewListType';
import HorizontalContactCard from '../../../Components/HorizontalContactCard/HorizontalContactCard';

export function ContactsList(props: any) {
    const { headerName, jsonAction }: WebViewListType = props.route.params;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({title: headerName});
      }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {JSON.parse(jsonAction)
                    .map((item: any, index: number) => (<HorizontalContactCard key={index} contactJson={item} />))}
            </ScrollView>
        </SafeAreaView>
    )

}

export default ContactsList;