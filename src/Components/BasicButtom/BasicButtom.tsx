import React from 'react';
import {styles} from './Styles';
import {ButtonPropsType} from '../../Types/ButtonProps';
import {Image, Text, TouchableOpacity} from 'react-native';

export function BasicButtom({title, icon, ...rest}: ButtonPropsType) {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      {icon !== undefined ? (
        <Image
          style={styles.icon}
          source={{uri: `../../../assets/icons/${icon}`}}
        />
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default BasicButtom;
