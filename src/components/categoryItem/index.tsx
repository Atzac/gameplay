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
    hasCheckBox?: boolean;
    onPress: any
}

export function CategoryItem({
    title, 
    icon : Icon, 
    checked = false,
    hasCheckBox = false,
    ...rest
} : Props) {
    const {secondary70, secondary50, secondary85, secondary40, secondary30} = theme.colors
    

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        {...rest}
      >
        <LinearGradient
          style={styles.container}
          colors={[secondary30, secondary70]}
        >
          <LinearGradient 
            style={[styles.content, { opacity: checked ? 1 : 0.5}]}
            colors={[checked ? secondary85 : secondary50, secondary40]}
          >
            {
              hasCheckBox &&
              <View style={checked ? styles.checked : styles.check} />
            }
            <Icon 
              width={48} 
              height={48}
            />
            <Text style={styles.title}>
              { title }
            </Text>         
          </LinearGradient>
  
        </LinearGradient>
     </TouchableOpacity>
    )
}
