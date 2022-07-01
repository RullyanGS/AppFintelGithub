import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import { ButtonPropsType } from '../../Types/ButtonProps';

export function TouchableText({ title, ...rest }: ButtonPropsType) {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default TouchableText;
