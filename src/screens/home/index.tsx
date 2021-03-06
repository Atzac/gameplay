
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import { Appointment } from '../../components/appointment';

import { ButtonAdd } from '../../components/buttonAdd';
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../../routes/auth.routes"
import { CategoryCards } from '../../components/categoryCards';
import { ListDivider } from '../../components/listDivider';
import { ListHeader } from '../../components/listHeader';
import { Profile } from '../../components/profile';

import { styles } from './styles';
import { Background } from '../../components/background';

type AppointmentDetailsScreenProp = NativeStackNavigationProp<RootStackParamsList, "AppointmentDetails">
type AllScreens = NativeStackNavigationProp<RootStackParamsList, "AppointmentCreate"> & AppointmentDetailsScreenProp

export function Home() {
    const navigation = useNavigation<AllScreens>();
    const [category, setCategory] = useState("")

    const appointments = [
      {
        id: "1",
        guild: {
          id: 1,
          name: "Lendários",
          icon: null,
          owner: true
        },
        category: "1",
        date: "24/01 às 20:40",
        description: "È hoje que vamos chegar ao charlenger sem perder uma partida da md10"
      }
    ]

    function handleAppointmentDetails() {
      navigation.navigate("AppointmentDetails")
    }

    function handleAppointmentCreate() {
      navigation.navigate("AppointmentCreate")
    }

    function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
          <View style={styles.header}>
            <Profile />     
            <ButtonAdd 
              onPress={handleAppointmentCreate}
            />
          </View>

          <CategoryCards
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
     
          <ListHeader 
            title={"Partidas agendadas"}
            subTitle={"Total: 6"}
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 50 }}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
         
        </Background>
    )
}
