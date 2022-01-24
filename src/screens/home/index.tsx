import React, {useState} from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '../../components/buttonAdd';
import { CategoryCards } from '../../components/categoryCards';
import { Profile } from '../../components/profile';

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('')

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
        </View> 
    )
}
