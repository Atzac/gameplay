import React from "react";
import { View, TouchableOpacity, ImageBackground, Text } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons"

import { styles } from "./styles";
import { Background } from "../../components/background";
import { Header } from "../../components/header";
import { theme } from "../../global/styles/theme";
import { ListHeader } from "../../components/listHeader";
 
export function AppointmentDetails() {
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
                    É hoje que vamos chegar ao challenger sem perder uma partida md10
                  </Text>
              </View>
            </ImageBackground>

            <ListHeader 
              title="Jogadores"
              subTitle="Total 3"
            />
        </Background>
    )
}