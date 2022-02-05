import React from "react";
import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/guild";
import { ListDivider } from "../../components/listDivider";

import { styles } from "./styles";

type Props = {
    handleGuildSelect: (guildSelect: GuildProps) => void
}

export function Guilds({ handleGuildSelect } : Props) {
    const guilds = [
        {
            id: "1",
            name: "Legendários",
            icon: null,
            owner: true
        },
        {
            id: "2",
            name: "Marginais",
            icon: null,
            owner: true
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
              data={guilds}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                  <Guild 
                    data={item}
                    onPress={() => handleGuildSelect(item)}
                  />
              )}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />} 
              ListHeaderComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 50, paddingTop: 60}}
              style={styles.guilds}
            />
        </View>
    )
}