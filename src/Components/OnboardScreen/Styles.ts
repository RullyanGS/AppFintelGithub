import { StyleSheet } from 'react-native'
import { AppColors } from '../../../assets/AppColors'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 80,
        color: AppColors.BlackMedium,
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginHorizontal: 15
    },
    body: {
        marginTop: 20,
        marginBottom: 60,
        color: AppColors.BlackMedium,
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        marginHorizontal: 15,
    },
})