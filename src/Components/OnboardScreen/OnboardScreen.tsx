import React from 'react'
import { styles } from './Styles';
import {Text, View } from 'react-native';
import { OnboardScreenType } from '../../Types/OnboardScreenType';

export function OnboardScreen({title, body} : OnboardScreenType) {

    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );

};

export default OnboardScreen;