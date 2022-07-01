import * as React from 'react';
import IssRoutes from './IssRoutes';
import Home from '../screens/Home/Home';
import { AppColors } from '../../assets/AppColors';
import Onboarding from '../screens/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionsList from '../screens/GeneralWebView/ActionsList/ActionsList';
import ContactsList from '../screens/GeneralWebView/ContactsList/ContactsList';
import WebViewScreen from '../screens/GeneralWebView/WebViewScreen/WebViewScreen';

const Stack = createNativeStackNavigator();

const ApplicationRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="WebViewComponent"
                    component={WebViewScreen}
                    options={{
                        headerTintColor: AppColors.purpleDark,
                        title: "",
                    }}
                />
                <Stack.Screen
                    name="ActionsList"
                    component={ActionsList}
                    options={{
                        headerTintColor: AppColors.purpleDark,
                        title: ""
                    }}
                />
                <Stack.Screen
                    name="ContactsList"
                    component={ContactsList}
                    options={{
                        headerTintColor: AppColors.purpleDark,
                        title: ""
                    }}
                />
                <Stack.Screen
                    name="IssRoutes"
                    component={IssRoutes}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ApplicationRoutes;