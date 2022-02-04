import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
//import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        width: "100%",
        height: 68,
        flexDirection: "row",
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingRight: 22,
        overflow: "hidden",
    },
    selectBody: {
        flex: 1,
        marginLeft: 20
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary40,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8
    },
    field: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    divider: {
        marginRight: 4,
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
    },
    max100caracters: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        marginBottom: 10,
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
    
})