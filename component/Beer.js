import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import BeerColorScale from './BeerColorScale';

const Beer = (props) => {
  const { item } = props;
  const { hops, malt, yeast } = item.ingredients;

  const joiner = (props) => {
    const { objects, key } = props;
    let keys = new Set();
    objects.map(obj => {
      keys.add(obj[key]);
    })
    return [...keys].join(', ');
  }


  const hopsUsed = joiner({ objects: hops, key: 'name'});
  const maltsUsed = joiner({ objects: malt, key: 'name'});

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.image} source={{ uri: item.image_url }} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.heading}>{item.tagline}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.colorScale}>
            <BeerColorScale srm={item.srm} />
          </View>
          <View>
            <Text style={styles.heading}>Ingredients</Text>
            <View style={styles.ingredientContainer}>
              <View style={styles.ingredient}>
                <Text style={styles.subheading}>
                  Hops
                </Text>
               </View>
              <View>
                <Text style={styles.ingredient}>
                  {hopsUsed}
                </Text>
              </View>
            </View>
            <View style={styles.ingredientContainer}>
              <Text style={styles.subheading}>
                Malts
              </Text>
              <Text style={styles.ingredient}>
                {maltsUsed}
              </Text>
            </View>
            <View style={styles.ingredientContainer}>
              <Text style={styles.subheading}>
                Yeast
              </Text>
              <Text style={styles.ingredient}>
                {yeast}
              </Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerDetail}>
                <Text>ABV: {item.abv}%</Text>
              </View>
              <View style={styles.footerDetail}>
                <Text>IBU: {item.ibu}</Text>
              </View>
              <View style={styles.footerDetail}>
                <Text>SRM: {item.srm}</Text>
              </View>
              <View style={styles.footerDetail}>
                <Text>OG: {item.target_og}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 20
  },
  description: {
    fontSize: 22,
    textAlign: 'justify',
    marginVertical: 20,
    maxWidth: 600,
    marginHorizontal: 'auto'
  },
  item: {
    paddingHorizontal: 10,
    marginVertical: 8,
    flex: 1,
    maxWidth: 600,
    marginHorizontal: 'auto'
  },
  image: {
    height: 500, width: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  colorScale: {
    minHeight: 20,
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
  },
  ingredientContainer: {
    flex: 1,
    fontSize: 20,
    marginVertical: 10
  },
  ingredient: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center'
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 20
  },
  subheading: {
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  footerDetail: {
    flex: 1,
    alignItems: 'center'
  }
});

export default Beer;
