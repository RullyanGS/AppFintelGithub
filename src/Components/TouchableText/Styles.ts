import {
    StyleSheet,
} from 'react-native';
import { AppColors } from '../../../assets/AppColors';

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 5,
        padding: 10,
        height: 45
    },
    title: {
        flex: 1,
        color: AppColors.purpleDark,
        fontSize: 15,
        textAlign: 'center',
    }
});