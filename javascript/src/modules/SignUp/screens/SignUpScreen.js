import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native';

import SignUpActions from '../actions';
import SignUpButton from '../components/SignUpButton';
import sceneGenerator from '../../../utils/sceneGenerator';

const styles = StyleSheet.create({
  countText: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export const SignUp = props => (
  <View style={{ flex: 1, backgroundColor: 'blue', padding: 10 }}>
    <View style={{ flex: 1 }} />
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'white', borderRadius: 15, borderWidth: 2, height: 35, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ height: 40, width: 40 }}
            source={require('../../../../assets/images/name.png')}
          />
        </View>
        <View style={{ flex: 5, borderBottomColor: 'white', borderBottomWidth: 1, marginRight: 30, marginBottom: -10, height: 20 }}>
          <TextInput
            style={{ flex: 1, color: 'white', fontSize: 20 }}
          />
        </View>
      </View>
      <SignUpButton color={'green'} title={' + 1 '} onPress={props.increment} />
      <Text style={styles.countText}> { props.count } </Text>
      <SignUpButton color={'red'} title={' - 1 '} onPress={props.decrement} />
    </View>
    <View style={{ marginTop: 50, flex: 1, justifyContent: 'space-around' }}>
      <SignUpButton containerStyles={{ width: 100 }} title={' Next -> '} onPress={Actions.keyboardViewTest} />
    </View>
  </View>
);

SignUp.propTypes = {
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  count: React.PropTypes.number,
};

SignUp.defaultProps = {
  increment: () => '',
  decrement: () => '',
  count: 0,
};

const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = () => SignUpActions;


const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(SignUp);

const generatedScene = sceneGenerator({
  component: reduxConnected,
  initial: true,
  key: 'SignUp',
});

export default generatedScene;
