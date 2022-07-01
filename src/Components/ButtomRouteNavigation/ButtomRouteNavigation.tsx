import React from 'react';
import BasicButtom from '../BasicButtom/BasicButtom';
import { useNavigation } from '@react-navigation/native';
import { ButtomNativeActionType } from '../../Types/ButtomNativeActionType';

export function ButtomRouteNavigation({ route, title, action }: ButtomNativeActionType) {
    
    const navigation = useNavigation();

    function handleButtonPress() {
        navigation.navigate(route as never, { headerName: title, jsonAction: action } as never);
    }

    return (
        <BasicButtom title={title} onPress={handleButtonPress} />
    );
}

export default ButtomRouteNavigation;
