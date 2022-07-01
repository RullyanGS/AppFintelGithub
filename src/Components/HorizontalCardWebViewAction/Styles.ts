import { StyleSheet } from 'react-native';
import { AppColors } from '../../../assets/AppColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
        backgroundColor: AppColors.purpleMedium,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: AppColors.White,
        textAlign: 'center',
    },
});
