import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import { Appointment } from '../../components/appointment';

import { ButtonAdd } from '../../components/buttonAdd';
import { CategoryCards } from '../../components/categoryCards';
import { ListDivider } from '../../components/listDivider';
import { ListHeader } from '../../components/listHeader';
import { Profile } from '../../components/profile';

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('')

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
      },
      {
        id: "2",
        guild: {
          id: 1,
          name: "Lendários",
          icon: null,
          owner: true
        },
        category: "1",
        date: "24/01 às 20:40",
        description: "È hoje que vamos chegar ao charlenger sem perder uma partida da md10"
      },
      {
        id: "3",
        guild: {
          id: 1,
          name: "Lendários",
          icon: null,
          owner: true
        },
        category: "1",
        date: "24/01 às 20:40",
        description: "È hoje que vamos chegar ao charlenger sem perder uma partida da md10"
      },
      {
        id: "4",
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

    function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId);
      console.log(categoryId)
    }

    return (
        <View >
          <View style={styles.header}>
            <Profile />     
            <ButtonAdd />
          </View>

          <CategoryCards
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <View style={styles.content}>
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
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
    )
}
