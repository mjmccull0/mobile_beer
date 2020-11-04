import React from "react";
import BeerList from "../component/BeerList";
import BeerCard from "../component/BeerCard";
import { useBeer } from "../hook/useBeer";

const HomeScreen = ({ navigation }) => {
  const [ data, nextPage, refresh, isRefreshing ] = useBeer();

  return (
    <BeerList
      component={BeerCard}
      navigation={navigation}
      data={data}
      nextPage={nextPage}
      refresh={refresh}
      isRefreshing={isRefreshing}
    />
  );
}

export default HomeScreen;
