import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeIss from '../screens/Iss/HomeIss/HomeIss';
import { AppColors } from '../../assets/AppColors';
import LoginWebViewIss from '../screens/Iss/LoginWebViewIss/LoginWebViewIss';
import WebViewIss from '../screens/Iss/WebViewIss/WebViewIss';

const Stack = createNativeStackNavigator();

const IssRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeIss"
                component={HomeIss}
                options={{
                    headerTintColor: AppColors.purpleDark,
                    title: '',
                }}
            />
            <Stack.Screen
                name="LoginWebViewIss"
                component={LoginWebViewIss}
                options={{
                    headerTintColor: AppColors.purpleDark,
                    title: '',
                }}
            />
            <Stack.Screen
                name="WebViewIss"
                component={WebViewIss}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default IssRoutes;