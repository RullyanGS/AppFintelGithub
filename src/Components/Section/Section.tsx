import React from 'react';
import { styles } from './Styles';
import { Text, useColorScheme, View, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type ISection = {
    title: string;
    children: React.ReactNode;
}

export const Section = ({ children, title } : ISection) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};