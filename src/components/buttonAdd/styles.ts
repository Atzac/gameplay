import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
    }
});