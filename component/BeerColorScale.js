import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const groupColor = [
  '#dab700',
  '#c38e0d',
  '#ad6a20',
  '#984c1d',
  '#85341d',
  '#74211a',
  '#641413',
  '#550d11',
  '#440c11',
  '#3c0c11'
];

const srm2Color = (srm) => {
  if (!srm) {
    return null;
  }

  if (srm <= 4) {
    return groupColor[0];
  }
  else if (srm <= 8) {
    return groupColor[1];
  }
  else if (srm <= 12) {
    return groupColor[2];
  }
  else if (srm <= 16) {
    return groupColor[3];
  }
  else if (srm <= 20) {
    return groupColor[4];
  }
  else if (srm <= 24) {
    return groupColor[5];
  }
  else if (srm <= 28) {
    return groupColor[6];
  }
  else if (srm <= 32) {
    return groupColor[7];
  }
  else if (srm <= 36) {
    return groupColor[8];
  }
  else {
    return groupColor[9];
  }
}

const ColorScale = ({ selected }) => {
  return (
    <View style={styles.container}>
      {groupColor.map(color => (
        <View
          style={[
            styles.color,
            selected === color ? styles.selected : {},
            { backgroundColor: color }
          ]}
          key={color}
        />
      ))}
    </View>
  );
}

const BeerColorScale = (props) => {
  const color = (srm) => {
    return srm2Color(srm);
  }

  return (
    <ColorScale selected={srm2Color(props.srm)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    paddingRight: 20
  },
  color: {
    paddingBottom: '10%',
    width: '10%',
    marginHorizontal: 1
  },
  selected: {
    borderWidth: 1,
    marginVertical: -10,
  }
});

export default BeerColorScale;
