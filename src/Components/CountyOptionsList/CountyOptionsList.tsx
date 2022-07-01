import { styles } from './Styles';
import { View } from 'react-native';
import { CountyManager } from '../../utils/CountyManager';
import { County } from '../../Types/JsonAutoatendimento/County';
import React, { useCallback, useEffect, useState } from 'react';
import LoadingScreen from '../../screens/LoadingScreen/LoadingScreen';
import ButtomRouteNavigation from '../ButtomRouteNavigation/ButtomRouteNavigation';
import CountyOptionsActionsList from '../CountyOptionsActionsList/CountyOptionsActionsList';

type Props = {
    ibgeCode: string;
}

export function CountyOptionsList({ ibgeCode }: Props) {
    const [county, setCounty] = useState<County | null>(null);

    const FindCounty = useCallback(() => {
        const find = async () => {
            const result = await CountyManager.GetCountyByIbgeCode(ibgeCode);
            setCounty(result);
        }

        find();
    }, [ibgeCode]);

    useEffect(() => { FindCounty() }, [FindCounty]);

    if (county == null) {
        return (<LoadingScreen />)
    } else {
        return (
            <View style={styles.container}>
                {(county.hasOwnProperty("Acoes")) ? <CountyOptionsActionsList actionsJson={JSON.stringify(county.Acoes)} /> : null}
                {(county.hasOwnProperty("Contatos")) ? <ButtomRouteNavigation
                    route='ContactsList'
                    title='Contatos'
                    action={JSON.stringify(county.Contatos)} /> : null}
            </View>
        );
    }
}

export default CountyOptionsList;
