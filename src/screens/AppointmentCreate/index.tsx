import React, {useState} from "react";
import { View, 
         TouchableOpacity, 
         Text, ScrollView, 
         KeyboardAvoidingView, 
         Platform
        } from "react-native";

import { Feather } from "@expo/vector-icons"

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/background";
import { Header } from "../../components/header";
import { CategoryCards } from "../../components/categoryCards";
import { GuildIcon } from "../../components/guildIcon";
import { SmallInput } from "../../components/smallInput";
import { DescInput } from "../../components/descInput";
import { Button } from "../../components/button";
import { ModalViews } from "../../components/modalViews";
import { Guilds } from "../guilds";
import { GuildProps } from "../../components/appointment";

export function AppointmentCreate() {
  const [category, setCategory] = useState("")
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }
    
    
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
        <Background>
          <ScrollView>
            <Header
              title="Agendar partida"
            />

            <Text style={ [styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }] }>
              Categoria
            </Text>       

            <CategoryCards 
              hasCheckBox
              setCategory={setCategory}
              categorySelected={category}
            />

            <View style={styles.form}>
              <TouchableOpacity onPress={handleOpenGuilds}>             
                <View style={styles.select}>
                  {
                    //<View style={styles.image}/>
                    <GuildIcon />
                  }
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

              <View style={styles.field}>
                <View>
                  <Text style={styles.label}>Dia e mês</Text>

                  <View style={styles.column}>
                    <SmallInput 
                      maxLength={2}
                    />
                    <Text style={styles.divider}>
                      /
                    </Text>
                    <SmallInput 
                      maxLength={2}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>Hora e minuto</Text>
                  <View style={styles.column}>
                    <SmallInput 
                      maxLength={2}
                    />
                    <Text style={styles.divider}>
                      :
                    </Text>
                    <SmallInput 
                      maxLength={2}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.max100caracters}>Max 100 caracteres</Text>
              </View>
              <DescInput 
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
              />
              <View style={styles.footer}>
                <Button 
                  title="Agendar"
                />
              </View>
  
            </View>
          </ScrollView>

          
          <ModalViews visible={openGuildsModal}>
            <Guilds handleGuildSelect={handleGuildSelect}/>
          </ModalViews>
          
        </Background>
    </KeyboardAvoidingView>
    )
}