import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
    const uri = "https://e7.pngegg.com/pngimages/574/586/png-clipart-discord-computer-icons-logo-computer-software-others-miscellaneous-blue.png"
    return (
        <Image 
          source={{uri}}
          style={styles.image}
          resizeMode="cover"
        />
    )
}