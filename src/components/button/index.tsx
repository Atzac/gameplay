import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

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
            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
      
    );
  }