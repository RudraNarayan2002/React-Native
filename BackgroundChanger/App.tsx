import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [randomBackground1, setRandomBackground1] = useState('#ffffff');
  const [randomBackground2, setRandomBackground2] = useState('#ffffff');

  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColors = () => {
    setRandomBackground(generateRandomColor());
    setRandomBackground1(generateRandomColor());
    setRandomBackground2(generateRandomColor());
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={[styles.shapeView, {backgroundColor: randomBackground1}]}>
          <Text style={styles.shapeText}>Box 1</Text>
        </View>
        <TouchableOpacity onPress={generateColors}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.shapeView, {backgroundColor: randomBackground2}]}>
          <Text style={styles.shapeText}>Box 2</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: 'black',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionBtnTxt: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: 'white',
  },
  shapeView: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Added for better design
  },
  shapeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
