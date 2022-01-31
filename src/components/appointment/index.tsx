import React from "react";
import { View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../guildIcon";
import PlayerSvg from "../../assets/player.svg"
import CalendarSvg from "../../assets/calendar.svg"

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
    id: number;
    name: string;
    icon: null,
    owner: boolean
}
export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}
type Props = TouchableOpacityProps & {
    data: AppointmentProps;
}

export function Appointment({data, ...rest} : Props) {
    const [categoryY] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild
    const { primary, on } = theme.colors

    return (
        <TouchableOpacity
          activeOpacity={0.8}
          {...rest}
        >
          <View  style={styles.container}> 
            <GuildIcon />

            
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.title}>
                 {data.guild.name}
                </Text>
                <Text style={styles.category}>
                  {categoryY.title}
                </Text>
              </View>

                <View style={styles.footer}>
                  <View style={styles.dateInfo}>
                    <CalendarSvg />
                    <Text style={styles.date}>
                      { data.date }
                    </Text>
                  </View>
                

                  <View style={styles.playersInfo}>
                    <PlayerSvg fill={owner ? primary : on}/>
                    <Text style={[styles.players, { color: owner ? primary : on } ]}>
                      { owner ? "Anfitrião" : "Visitante" }
                    </Text>
                  </View>
                </View>
            </View>

          </View>
        </TouchableOpacity>
    )
}