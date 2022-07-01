import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../assets/AppColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flex: 2,
    },
    body: {
        flex: 6,
    },
    searchCounty: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent : 'center',
    },
    actionsCounty: {
        flex: 4,
        alignItems: 'center',
    },
    text: {
      color: AppColors.purpleDark,
      fontSize: 17 
    },
    picker: {
        marginTop: 10,
        borderColor: AppColors.purpleDark,
        width: '75%',
        borderWidth: 1,
        borderRadius: 30
    },
    FowardButton: {
        marginTop: 40
    }
    
});
