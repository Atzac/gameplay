import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { Background } from "../background";

export const styles = StyleSheet.create({
    container: {
       width: 104,
       height: 120,
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 8,
       marginRight: 8,
    },

    content: {
        width: 98,
        height: 114,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderRadius: 8,
    },

    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 15,
        marginTop: 15
    },

    checked: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 3
    },

    check: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 13,
        height: 13,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    },
});