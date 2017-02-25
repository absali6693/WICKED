import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import sceneGenerator from '../../../utils/sceneGenerator';

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 150,
    marginHorizontal: 10,
  },
  input: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center',
    height: 30,
    borderWidth: 1,
  },
  text: {
    color: 'darkgreen',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
});

export const KeyboardViewTest = () => (
  <View centered stretchItems fullscreen containerStyle={styles.containerStyle}>
    <Text style={styles.text}> Label </Text>
    <TextInput style={styles.input} placeholder={' Input Text Here '} />
    <Text style={styles.text}> Label </Text>
    <TextInput style={styles.input} placeholder={' Input Text Here '} />
    <Text style={styles.text}> Label </Text>
    <TextInput style={styles.input} placeholder={' Input Text Here '} />
  </View>
);

export default sceneGenerator({
  key: 'keyboardViewTest',
  title: 'Keyboard Test',
  component: KeyboardViewTest,
});
