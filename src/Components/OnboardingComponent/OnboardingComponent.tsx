import React from 'react'
import { styles } from './Styles';
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import OnboardScreen from '../OnboardScreen/OnboardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingMessages } from '../../global/OnboardingMessages';
import { StackActions, useNavigation } from '@react-navigation/native';
import Header from '../Header/Header';
import Bottom from '../Bottom/Bottom';

export function OnboardingComponent(props: any) {

    const steps: number = 0;
    const navigation = useNavigation();

    const DoNotShowThisOnboardAnymore = async (value: string) => {
        try {
            await AsyncStorage.setItem('OnBoardRelized', value)
        } catch { }
    }

    const handleHomeNavigation = (index: number) => {
        if (index == steps) {
            DoNotShowThisOnboardAnymore('true');
            navigation.dispatch(StackActions.replace('Home'));
            navigation.navigate('Home' as never);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.body}>
                <Swiper onIndexChanged={(index) => { handleHomeNavigation(index) }}
                    dot={<View style={styles.dot} />} activeDot={<View style={styles.activeDot} />}>

                    {OnboardingMessages.map((onboard, index) =>
                    (<View key={index}>
                        <OnboardScreen title={onboard.title} body={onboard.body} />
                    </View>))}

                </Swiper>
            </View>
            <View style={styles.footer}>
                <Bottom />
            </View>
        </View>
    );

};

export default OnboardingComponent;