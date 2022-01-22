import React from "react";
import { useFonts } from "expo-font"
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani"
import AppLoading from "expo-app-loading";

//process - install fonts -> import fonts -> useFonts hook -> intall AppLoading -> use


import { SignIn } from "./src/screens/signIn"

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SignIn />
  );
}


