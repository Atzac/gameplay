import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { GuildIcon } from "../guildIcon";
import { Feather } from "@expo/vector-icons"
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

export function Guild({ data, ...rest } : Props) {
    return (
        <TouchableOpacity 
          style={styles.container}
          activeOpacity={0.8}
          {...rest}
        >
            <GuildIcon />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        { data.name }
                    </Text>
                    <Text style={styles.owner}>
                        { data.owner ? "Administrador" : "Convidado" }
                    </Text>
                </View>
            </View>

            <Feather 
              name="chevron-right"
              color={theme.colors.heading}
              size={24}
            />
        </TouchableOpacity>
   
    )
}