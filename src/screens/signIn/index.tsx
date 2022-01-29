import React from 'react'
import { Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { styles } from './styles';
import Illustration from '../../assets/illustration.png'
import { Button } from '../../components/buttonIcon';
import { RootStackParamsList } from "../../routes/auth.routes"
import { Background } from '../../components/background'

type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, "Home">

export function SignIn() {
    const navigation = useNavigation<homeScreenProp>();
    
    const handleSignIn = () => {
      navigation.navigate("Home")
    }

    return (
      <Background>
        <View style={styles.container}>
          <Image 
            source={Illustration}
            style={styles.image}
            resizeMode='stretch'
          />

          <View style={styles.content}>
              <Text style={styles.title}>
                  Conecte-se e {"\n"}
                  organize suas {"\n"}
                  jogatinas     
              </Text>
              <Text style={styles.subTitle}>
                Crie grupos para jogar seus games
                favoritos com seus amigos
              </Text>

              <Button
                title={"Entrar com Discord"} 
                onPress={handleSignIn}
              />
          </View>
        </View>
      </Background>
    );
  }