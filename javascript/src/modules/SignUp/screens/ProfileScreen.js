import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import SignUpActions from '../actions';
import type { FormField } from "../actions";
import SignUpButton from '../components/SignUpButton';
import TextField from '../components/TextField';
import sceneGenerator from '../../../utils/sceneGenerator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  countText: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  avatarContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
    backgroundColor: 'rgba(0, 100, 200, 0.2)'
  },
  textFieldStyle: {
    height: 65,
    marginVertical: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  signUpBottomStyles: {
    position: 'absolute',
    bottom: 0,
    width: width - 20,
    height: 64,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    borderColor: 'white'
  },
});

export class ProfileScreen extends Component {

  render() {
    return (
      <Image
        style={{ flex: 1, backgroundColor: 'grey', padding: 10, paddingTop: 64, height: null, width: null }}
        source={require('../../../../assets/images/bg2.jpg')}
      >
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
              <Image style={styles.avatar} source={this.props.image} />
            </View>
        </View>
        <View style={{ flex: 1 }}>
          <TextField
            style={styles.textFieldStyle}
            label={'Name'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'steelblue'}
            value={this.props.name}
            editable={false}
          />
          <TextField
            style={styles.textFieldStyle}
            label={'Email'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'steelblue'}
            value={this.props.email}
            keyboardType="email-address"
            editable={false}
          />
          <TextField
            style={styles.textFieldStyle}
            label={'Phone Number'}
            iconClass={FontAwesomeIcon}
            value={this.props.number}
            iconName={'phone'}
            iconColor={'steelblue'}
            keyboardType="numeric"
            editable={false}
          />
          <TextField
            style={styles.textFieldStyle}
            label={'DOB'}
            iconClass={FontAwesomeIcon}
            iconName={'calendar'}
            iconColor={'steelblue'}
            onFocus={this._showDateTimePicker}
            value={this.props.dob.toLocaleString().split(',')[0]}
            editable={false}
          />
          <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }, styles.textFieldStyle]}>
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                this.props.setFormValue("male", true);
              }}            >
              <Image
                source={this.props.male ? require('../../../../assets/images/male_filled.png') : require('../../../../assets/images/male.png')}
              />
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                this.props.setFormValue("male", false);
              }}
            >
              <Image
                source={!this.props.male ? require('../../../../assets/images/female_filled.png') : require('../../../../assets/images/female.png')}
              />
              <Text>Female</Text>
            </TouchableOpacity>

          </View>
          <SignUpButton containerStyles={styles.signUpBottomStyles} color='white' title={' Return '} onPress={Actions.pop} />
        </View>
      </Image>
    );
  }
}

const mapStateToProps = state => ({
  name: state.SignUp.name,
  email: state.SignUp.email,
  image: state.SignUp.image,
  male: state.SignUp.male,
  dob: state.SignUp.dob,
  number: state.SignUp.number
});

const mapDispatchToProps = () => SignUpActions;


const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

export default sceneGenerator({
  key: 'ProfileScreen',
  title: 'Keyboard Test',
  component: reduxConnected,
});
