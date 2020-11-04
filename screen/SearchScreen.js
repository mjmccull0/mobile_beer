import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useBeer } from "../hook/useBeer";
import BeerList from "../component/BeerList";
import BeerCard from "../component/BeerCard";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchScreen = (props) => {
  const [ data, nextPage, refresh, isRefreshing, search ] = useBeer();
  const navigation = useNavigation();
  const [value, onChangeText] = useState('');

  useEffect(() => {
    navigation.setOptions({ headerTitle: props => (
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            placeholder={"Search for beer by name"}
            placeholderTextColor={"#000000"}
            onChangeText={text => handleOnChangeText(text)} 
            value={value}
          />
          { value.length > 0 &&
            <MaterialCommunityIcons.Button
              name="close"
              size={24}
              color="black"
              onPress={() => handleOnChangeText('')}
              backgroundColor="none"
              underlayColor="none"
            />
          }
        </View>
    )});
  }, [value]);

  const handleOnChangeText = (text) => {
    if (text) {
      search({ beer_name: text });
    } else {
      search();
    }
    onChangeText(text);
  }

  return (
    <BeerList
      data={data}
      component={BeerCard}
      navigation={navigation}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
    flex: 1,
    alignSelf: 'center',
    color: '#000000'
  },
});

export default SearchScreen;
