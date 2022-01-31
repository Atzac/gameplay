import React, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Feather } from "@expo/vector-icons"

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/background";
import { Header } from "../../components/header";
import { CategoryCards } from "../../components/categoryCards";

export function AppointmentCreate() {
  const [category, setCategory] = useState("")

    
    return (
        <Background>
            <Header
              title="Agendar partida"
            />

            <Text style={styles.label}>
              Categoria
            </Text>       

            <CategoryCards 
              hasCheckBox
              setCategory={setCategory}
              categorySelected={category}
            />

            <View style={styles.form}>
              <TouchableOpacity>
                <View style={styles.select}>
                  <View style={styles.image}/>
                  <View style={styles.selectBody}>
                    <Text style={styles.label}> Selecione um servidor </Text>
                  </View>

                  <Feather 
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
                </View>
              </TouchableOpacity>

            </View>
        </Background>
    )
}