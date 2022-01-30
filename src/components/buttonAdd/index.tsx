import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function ButtonAdd({ ...rest }) {
    return (
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.8}
          {...rest}
        >
            <MaterialCommunityIcons 
              name="plus"
              color={theme.colors.heading}
              size={24}
            />
        </TouchableOpacity>
    )
}
