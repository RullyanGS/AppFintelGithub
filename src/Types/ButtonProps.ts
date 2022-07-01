import { StyleProp, StyleSheetProperties, TouchableOpacityProps } from "react-native";

export type ButtonPropsType = TouchableOpacityProps & {
    title: string;
    icon?: string;
}