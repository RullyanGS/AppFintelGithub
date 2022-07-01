import React, { useEffect, useState } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { NativeLoginUtils } from '../../utils/NativeLoginUtils';
import CountySelect from '../GeneralWebView/CountySelect/CountySelect';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export function Home(props: any) {

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [hasAnyNativeLogin, setHasAnyNativeLogin] = useState<boolean | null>(null);

    const ResolveNativeLogin = () => {

        const findNativeLogin = async () => {
            try {
                const checkIfNativeLoginExists = await NativeLoginUtils.GetIbgeCodeFromLoggedCounty();
                if (checkIfNativeLoginExists == null) {
                    setHasAnyNativeLogin(false);
                } else {
                    let ibgeCode: number = +checkIfNativeLoginExists;
                    navigation.navigate('IssRoutes' as never,
                        { screen: 'HomeIss', params: { ibgeCode: ibgeCode } } as never);
                }
            } catch { }
        }

        findNativeLogin();
    }

    useEffect(() => { ResolveNativeLogin(); }, [isFocused]);

    if (hasAnyNativeLogin == null || hasAnyNativeLogin) {
        return (<LoadingScreen />);
    } else {
        return (<CountySelect />);
    }

}

export default Home;