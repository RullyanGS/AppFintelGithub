import { StyleSheet } from 'react-native'
import { AppColors } from '../../../assets/AppColors'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: "column"
    },
    header: {
      flex: 2,
    },
    body: {
      flex: 5,
    },
    footer: {
      flex: 1,
      backgroundColor: AppColors.purpleDark,
    },
    dot: {
        backgroundColor: AppColors.PurpleLight,
        width: 7,
        height: 7,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      },
    activeDot: {
      backgroundColor: AppColors.purpleDark,
      width: 7,
      height: 7,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
})