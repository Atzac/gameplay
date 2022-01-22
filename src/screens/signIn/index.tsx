import React, { useState } from 'react'
import { Image, View, Text, StatusBar } from 'react-native';

import { styles } from './styles';
import Illustration from '../../assets/illustration.png'
import { Button } from '../../components/buttonIcon';

export function SignIn() {
    const [texto, setTexto] = useState("")
    
    const handleChange = () => {
    
    }

    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Image 
          source={Illustration}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
            <Text style={styles.title}>
                Organize {`\n`}
                suas jogatinas {`\n`}
                facilmente     
            </Text>
            <Text style={styles.subTitle}>
              Crie grupos para jogar seus games
              favoritos com seus amigos
            </Text>

            <Button
              title={"Entrar com Discord"} 
            />
        </View>
      </View>
    );
  }