import React from 'react';
import { styles } from './Styles';
import { View, Image } from 'react-native';

export function LoadingScreen(props: any) {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/fintel_logo_small.png')} />
        </View>
    );

}

export default LoadingScreen;