import React from 'react';
import { styles } from './Styles';
import { View } from 'react-native';
import { Actions } from '../../Types/JsonAutoatendimento/Actions';
import ButtomRouteNavigation from '../ButtomRouteNavigation/ButtomRouteNavigation';
import ButtomWebViewScreenRedirect from '../ButtomWebViewScreenRedirect/ButtomWebViewScreenRedirect';

export function CountyOptionsActionsList({ actionsJson }: any) {

    return (
        <View>
            {JSON.parse(actionsJson)
                .filter((action: Actions) => action.Situacao)
                .map((item: Actions, index: number) => (
                    (item.hasOwnProperty("Acoes") ?
                        (<ButtomRouteNavigation
                            key={index}
                            title={item.Nome}
                            route='ActionsList'
                            action={JSON.stringify(item.Acoes)} />)
                        : (<ButtomWebViewScreenRedirect
                            key={index}
                            title={item.Nome}
                            controller={item.UrlAcao} />))
                ))}
        </View>
    );

}

export default CountyOptionsActionsList;
