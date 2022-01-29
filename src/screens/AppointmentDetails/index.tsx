import React from "react";

import { View } from "react-native";

import { styles } from "./styles";
import { Background } from "../../components/background";
import { Header } from "../../components/Template";

export function AppointmentDetails() {
    return (
        <Background>
            <Header
              title="Detalhes"
            />
        </Background>
    )
}