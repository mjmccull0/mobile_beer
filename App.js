import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import BeerScreen from "./screen/BeerScreen";
import Header from "./component/Header";

const options = {
  screens: [
    {
      name: "Home",
      component: HomeScreen,
      options:{ headerTitle: props => 
        <Header {...props} title="Home" />
      }
    },
    {
      name: "Search",
      component: SearchScreen,
      options:{ title: '' }
    },
    {
      name: "BeerDetail",
      component: BeerScreen,
      options: { title: '' }
    }
  ]
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation {...options} />
    </NavigationContainer>
  );
}
