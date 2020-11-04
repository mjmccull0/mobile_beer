import * as React from 'react';
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialCommunityIcons.Button
          name="magnify"
          size={30}
          onPress={() => navigation.navigate('Search')}
          color="#000000"
          backgroundColor="none"
          underlayColor="none"
        />
      </View>
      <View style={styles.center}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  left: {
    width: 50,
    position: 'absolute'
  },
  center: {
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Header;
