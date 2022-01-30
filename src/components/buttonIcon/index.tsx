import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Discord from '../../assets/discord.png';

type Props = {
    title: string;
    onPress?: any;
}

export function Button({ title, onPress } : Props) {
    return (
        <TouchableOpacity
          style={styles.container}
          onPress={onPress}
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