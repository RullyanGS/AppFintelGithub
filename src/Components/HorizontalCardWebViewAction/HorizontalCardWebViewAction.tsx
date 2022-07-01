import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

type Props = {
    title: string;
    controller: string;
}

export function HorizontalCardWebViewAction({ title, controller }: Props) {
    const navigation = useNavigation();

    function handleButtonPress(route: any) {
        navigation.navigate(route as never, { siteUrl: controller, headerName: title } as never);
    }

    return (
        <TouchableOpacity
            onPress={() => handleButtonPress('WebViewComponent')}
            style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default HorizontalCardWebViewAction;