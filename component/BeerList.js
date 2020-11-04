import React from "react";
import {
  FlatList,
} from 'react-native';
import Beer from "./Beer";

import { View, Text } from 'react-native';

const BeerList = (props) => {
  const {
    component,
    navigation,
    data,
    nextPage,
    refresh,
    isRefreshing
  } = props;

  const Item = component;

  return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={nextPage}
        refreshing={isRefreshing}
        onRefresh={refresh}
        onEndReachedThreshold={0.5}
        initialNumRender={5}
        keyboardShouldPersistTaps="always"
      />
  );
}

export default BeerList;
