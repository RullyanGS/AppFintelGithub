import React from 'react'
import { styles } from './Styles';
import { Image, View } from 'react-native'

export function Bottom(props: any) {

    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={require('../../../assets/images/cidade_facil_logo.png')} />
        </View>

    );

};

export default Bottom;