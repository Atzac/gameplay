import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
    },

    image: {
        marginTop: 40,
        width: '100%',
    },

    content: {
        marginTop: -60,
        paddingHorizontal: 40,
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 10,
        fontFamily: theme.fonts.title700,
        lineHeight: 43,
        
    },

    subTitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        padding: 20,
        fontFamily: theme.fonts.text400,
        lineHeight: 23,
    }
  });