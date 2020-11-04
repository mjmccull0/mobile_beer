import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import BeerColorScale from './BeerColorScale';

const BeerCard = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('BeerDetail', {
      item: item
    })}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text
            numberOfLines={1}
            style={styles.primaryText}
          >
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.secondaryText}
          >
            {item.tagline}
          </Text>
          <View style={styles.colorScale}>
            <BeerColorScale srm={item.srm} />
          </View>
          <View style={styles.subhead}>
            <View style={styles.attribute}>
              <Text>ABV: {item.abv}%</Text>
            </View>
            <View style={styles.attribute}>
              <Text>IBU: {item.ibu}</Text>
            </View>
          </View>
        </View>
        <Image style={styles.media} source={{ uri: item.image_url }} />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    flex: 1,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  body: {
    flex: 1,
    flexDirection: 'column'
  },
  subhead: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  attribute: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  colorScale: {
    flex: 1,
    marginTop: 30,
  },
  media: {
    height: '100%',
    width: '20%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  primaryText: {
    fontSize: 25,
    fontWeight: "bold",
    overflow: 'hidden'
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "400",
    overflow: 'hidden'
  },
});

export default BeerCard;
