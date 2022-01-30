import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
//import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    banner: {
        width: "100%",
        height: 230,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subTitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    },
    members: {
        height: 200,
        marginLeft: 24,
        marginTop: 27,
    },
    footer: {
        paddingHorizontal: 24,
        
        marginBottom: getBottomSpace() + 20
    }
})