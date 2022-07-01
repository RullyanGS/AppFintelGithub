import Home from '../Home/Home';
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingComponent } from '../../Components/OnboardingComponent/OnboardingComponent';

export function Onboarding(props: any) {

    const [onboardingRealized, setOnboardingRealized] = useState<Boolean | null>(null);

    const OnboardingWasRealized = () => {

        const findOnboard = async () => {
            try {
                const searchResult = await AsyncStorage.getItem('OnBoardRelized')
                    .then((result) => { return result !== null ? true : false; })
                    .catch(() => { return false; });

                setOnboardingRealized(searchResult);
            } catch { }
        }

        findOnboard();

    }

    useEffect(() => { OnboardingWasRealized(); }, []);

    switch (onboardingRealized) {
        case null:
            return (<LoadingScreen />);
        case true:
            return (<Home />);
        default:
            return (<OnboardingComponent />);
    }

};

export default Onboarding;