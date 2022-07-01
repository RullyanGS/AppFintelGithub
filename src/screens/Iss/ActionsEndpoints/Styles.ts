import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../assets/AppColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonList: {
        justifyContent: 'center',
    },
    logOut: {
        position: 'absolute',
        bottom: 1,
    }
});
