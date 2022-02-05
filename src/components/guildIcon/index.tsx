import React from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

export function GuildIcon() {
    const uri = "https://pbs.twimg.com/profile_images/942591909960306689/dNeRG9ez_400x400.jpg"
    const { primary, on, secondary30, secondary70 } = theme.colors

    return (
            <LinearGradient
              style={styles.guildIconContainer}
              colors={[secondary30, secondary70]}
            >
              <Image 
                source={{uri}}
                style={styles.image}
                resizeMode="cover"
              />  
            </LinearGradient>
    )
            
        
}