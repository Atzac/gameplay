import React from 'react'
import { Image, View, Text, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../../routes/auth.routes"

import { styles } from './styles';
import Illustration from '../../assets/illustration.png'
import { Button } from '../../components/buttonIcon';
import { Background } from '../../components/background'
import { theme } from '../../global/styles/theme';

import { useAuth } from "../../context/auth"

type homeScreenProp = NativeStackNavigationProp<RootStackParamsList, "Home">

export function SignIn() {
    const navigation = useNavigation<homeScreenProp>();
    const { loading, signIn } = useAuth();
    
    const handleSignIn = async () => {
      //navigation.navigate("Home")
      try {
        await signIn();
      } catch (error) {
        //Alert.alert(error)
      }
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

              { 
                loading ? <ActivityIndicator color={theme.colors.primary}/> 
                :
                <Button
                  title={"Entrar com Discord"} 
                  onPress={handleSignIn}
                />
              }
          </View>
        </View>
      </Background>
    );
  }