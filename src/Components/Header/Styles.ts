import { StyleSheet } from 'react-native'
import { AppColors } from '../../../assets/AppColors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center',
	    borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        backgroundColor: AppColors.purpleDark,
    },
    headerImage: {
        width: '40%',
        resizeMode: 'contain',
    },
})