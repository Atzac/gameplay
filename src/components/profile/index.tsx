import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../avatar";

import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
          <Avatar
            urlImage="https://avatarfiles.alphacoders.com/211/211394.jpg"
          />

          <View >
            <View style={styles.user}>
              <Text style={styles.greating}>
                  Olá,
              </Text>
              <Text style={styles.username}>
                  Isaac
              </Text>
            </View>

            <Text style={styles.message}>
                Hoje é dia de vitória
            </Text>
          </View>

        </View>
    )
}