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
        backgroundColor: theme.colors.secondary40,
        paddingVertical: 7,
        borderRadius: 8,
    },

    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 15,
    },

    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-end",
        marginRight: 7,
    },

    check: {
        width: 13,
        height: 13,
        backgroundColor: theme.colors.secondary100,
        alignSelf: "flex-end",
        marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    },
});