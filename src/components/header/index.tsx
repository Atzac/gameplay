/* tslint:disable */
import React, {ReactNode} from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons"

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action } : Props) {
    const { secondary100, secondary70, heading } = theme.colors;
    const navigation = useNavigation();

    function handleGoBack() {
      navigation.goBack();
    }

    return (
       <LinearGradient
         style={styles.container}
         colors={[secondary100, secondary70]}
       >
         <TouchableOpacity onPress={handleGoBack}>
             <Feather 
               name="arrow-left"
               size={24}
               color={heading}
             />
         </TouchableOpacity>
         <Text style={styles.title}>
           { title }
         </Text>

         {
             action && 
             <View>
                 { action }
             </View>
         }
       </LinearGradient>
    )
}