import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

import SignUpActions from '../actions';
import SignUpButton from '../components/SignUpButton';
import TextField from '../components/TextField';
import sceneGenerator from '../../../utils/sceneGenerator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  countText: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export const SignUp = props => (
  <View style={{ flex: 1, backgroundColor: 'grey', padding: 10 }}>
    <View style={{ flex: 1 }} />
    <View style={{ flex: 1 }}>
      <TextField
        style={{ height: 65 }}
        label={'Name'}
        iconClass={FontAwesomeIcon}
        iconName={'user'}
        iconColor={'steelblue'}
        onChangeText={(text) => {
        }}
      />
      <TextField
        style={{ height: 65 }}
        label={'Email'}
        iconClass={FontAwesomeIcon}
        iconName={'envelope'}
        iconColor={'steelblue'}
        keyboardType="email-address"
      />
      <TextField
        style={{ height: 65 }}
        label={'Phone Number'}
        iconClass={FontAwesomeIcon}
        iconName={'phone'}
        iconColor={'steelblue'}
        keyboardType="numeric"
      />
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
