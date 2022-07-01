import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles';

type Props = {
    contactJson: any;
}

export function HorizontalContactCard({ contactJson }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{contactJson.Setor}</Text>
            <Text style={styles.text}>Telefone: {contactJson.Telefone}</Text>
            {((contactJson.hasOwnProperty("Email")) ? <Text style={styles.text}>e-mail: {contactJson.Email}</Text> : null)}
        </View>
    );
}

export default HorizontalContactCard;