import { styles } from './Styles';
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { CountyManager } from '../../../utils/CountyManager';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import BasicButtom from '../../../Components/BasicButtom/BasicButtom';
import CountyOptionsList from '../../../Components/CountyOptionsList/CountyOptionsList';
import Header from '../../../Components/Header/Header';

export function CountySelect(props: any) {

    const navigation = useNavigation();
    const [ehNativo, setEhNativo] = useState<boolean>(false);
    const [countyList, setCountyList] = useState<any | null>(null);
    const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

    const HandleHomeIss = (IbgeCode: string) => {
        navigation.navigate('IssRoutes' as never, { screen: 'HomeIss', params: { ibgeCode: IbgeCode } } as never)
    }

    const HandleCountySelect = (value: any) => {
        if (value !== null) {
            HandleValidSelectedCounty(value);
        } else {
            setEhNativo(false);
            setSelectedCounty(null);
        }
    }

    const HandleValidSelectedCounty = (value: any) => {
        if (value.Nativo) {
            setSelectedCounty(value.ibgeCode);
            setEhNativo(true);
            HandleHomeIss(value.ibgeCode);
        } else {
            setEhNativo(false);
            setSelectedCounty(value.ibgeCode);
        }
    }

    const FindCountyList = () => {

        const find = async () => {
            const result: any = await CountyManager.GetCountyOptions();
            setCountyList(result);
        }

        find();
    };

    useEffect(() => { FindCountyList(); }, []);

    if (countyList == null) {
        return (<LoadingScreen />)
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                
                <View style={styles.body}>
                    <View style={styles.searchCounty}>
                        <Text style={styles.text}>Selecione sua cidade:</Text>

                        <View style={styles.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => HandleCountySelect(value)}
                                items={countyList}
                                placeholder={{
                                    label: 'Selecione sua cidade...',
                                    value: null,
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.actionsCounty}>
                        {(selectedCounty !== null) ?
                            (ehNativo) ?
                                <View style={styles.FowardButton} >
                                    <BasicButtom title='Prosseguir' onPress={() => HandleHomeIss(selectedCounty)} />
                                </View>
                                : <CountyOptionsList ibgeCode={selectedCounty} />
                            : null
                        }
                    </View>
                </View>
            </View>
            
        )
    }

}

export default CountySelect;