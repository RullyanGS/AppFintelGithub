import {
    StyleSheet,
} from 'react-native';
import { AppColors } from '../../../assets/AppColors';

export const styles = StyleSheet.create({
    button: {
        margin: 10,
        backgroundColor: AppColors.purpleMedium,
        borderRadius: 30,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 195,
        alignSelf: 'flex-start'
    },
    title: {
        flex: 1,
        color: AppColors.White,
        fontSize: 15,
        textAlign: 'center',
    }, 
    icon: {
        width: 25,
        height: 25
    }
});