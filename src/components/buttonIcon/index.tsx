import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Discord from '../../assets/discord.png';

type Props = {
    title: string;
}

export function Button({ title } : Props) {

    return (
        <TouchableOpacity 
          style={styles.container}
          activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <Image 
                  source={Discord} 
                  style={styles.icon}
                />  
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
      
    );
  }