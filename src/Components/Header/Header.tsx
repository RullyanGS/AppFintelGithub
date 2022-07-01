import React from 'react'
import { styles } from './Styles';
import { Image, View } from 'react-native'

export function Header(props: any) {
    return (
        <View style={styles.container} >
            <Image
                style={styles.headerImage}
                source={require('../../../assets/images/fintel_logo_white.png')} />
        </View>
    );

};

export default Header;