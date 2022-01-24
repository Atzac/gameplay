import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props =  {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
    onPress: any
}

export function CategoryItem({
    title, 
    icon : Icon, 
    checked = true,
    ...rest
} : Props) {
    const {secondary70, secondary50} = theme.colors
    

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        {...rest}>
        <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
        >
          <View style={[styles.content, { opacity: checked ? 1 : 0.4}]}>
            <View style={checked ? styles.checked : styles.check} />

              <Icon 
                width={48} 
                height={48}
              />
              <Text style={styles.title}>
                { title }
              </Text>         
          </View>
  
        </LinearGradient>
     </TouchableOpacity>
    )
}
