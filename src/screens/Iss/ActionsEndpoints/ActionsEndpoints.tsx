import { styles } from './Styles';
import { View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeLoginUtils } from '../../../utils/NativeLoginUtils';
import { Actions } from '../../../Types/JsonAutoatendimento/Actions';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ActionsEndpointsType } from '../../../Types/ActionsEndpointsType';
import TouchableText from '../../../Components/TouchableText/TouchableText';
import ButtomRouteNavigation from '../../../Components/ButtomRouteNavigation/ButtomRouteNavigation';

export function ActionsEndpoints({ county }: ActionsEndpointsType) {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);


    const LogOut = () => {
        NativeLoginUtils.RemoveNativeLoginData();
        navigation.dispatch(StackActions.replace('Home'));
        navigation.navigate('Home' as never);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logOut}>
                <TouchableText
                    title='Selecionar outra prefeitura'
                    onPress={LogOut} />
            </View>
            <View style={styles.buttonList}>
                {county.Acoes?.filter((actions: Actions) => actions.Situacao)
                    .map((item: Actions, index: number) => (
                        <ButtomRouteNavigation
                            key={index}
                            route={item.Rota as string}
                            title={item.Nome}
                            action={item.UrlAcao} />
                    ))}
            </View>
        </View>
    );
}


export default ActionsEndpoints;