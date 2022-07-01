import { StyleSheet } from 'react-native';
import { AppColors } from '../../../assets/AppColors';

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: AppColors.purpleMedium,
        borderRadius: 5,
        padding: 10,
    },
    title: {
        color: AppColors.White,
        fontWeight: '900',
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        color: AppColors.White,
    },
});
