import React from 'react';
import BasicButtom from '../BasicButtom/BasicButtom';
import { useNavigation } from '@react-navigation/native';
import { ButtomWebViewActionType } from '../../Types/ButtomWebViewActionType';

export function ButtomWebViewScreenRedirect({ title, controller }: ButtomWebViewActionType) {
    const navigation = useNavigation();

    function handleButtonPress() {
        navigation.navigate('WebViewComponent' as never, { siteUrl: controller, headerName: title } as never);
    }

    return (
        <BasicButtom title={title} onPress={handleButtonPress} />
    );
}

export default ButtomWebViewScreenRedirect;