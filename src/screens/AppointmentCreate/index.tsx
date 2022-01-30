import React from "react";
import { View, TouchableOpacity, ImageBackground, Text, FlatList } from "react-native";

import { Fontisto } from "@expo/vector-icons"

import { styles } from "./styles";
import { Background } from "../../components/background";
import { Header } from "../../components/header";
import { theme } from "../../global/styles/theme";
import { ListHeader } from "../../components/listHeader";
import { Member } from "../../components/member";
import { ListDivider } from "../../components/listDivider";
import { Button } from "../../components/buttonIcon";
 
export function AppointmentCreate() {
    const members = [
      {
        id: "1",
        username: "Isaac",
        avatar_url: "https://github.com/atzac.png",
        status: "online"
      },
      {
        id: "2",
        username: "Isaac",
        avatar_url: "https://github.com/atzac.png",
        status: "offline"
      },
      {
        id: "3",
        username: "Isaac",
        avatar_url: "https://github.com/atzac.png",
        status: "offline"
      },
    ]
    return (
        <Background>
            <Header
              title="Detalhes"
              action={
                  <TouchableOpacity>
                      <Fontisto 
                        name="share"
                        size={20}
                        color={theme.colors.primary}
                      />
                  </TouchableOpacity>
              }
            />

            <ImageBackground
              source={require("../../assets/banner.png")}
              style={styles.banner}
            >
              <View style={styles.container}>
                <Text style={styles.title}>
                    Lendários
                </Text>
                <Text style={styles.subTitle}>
                    Vadia Puta
                  </Text>
              </View>
            </ImageBackground>

            <ListHeader 
              title="Jogadores"
              subTitle="Total 3"
            />

            <FlatList 
              data={members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Member 
                  data={item}
                />
              )}
              ItemSeparatorComponent={() =>
                <ListDivider />
              }
              style={styles.members}
            />
            
            <View style={styles.footer}>
              <Button 
                title={"Entrar na partida"}
              />
            </View>
        </Background>
    )
}