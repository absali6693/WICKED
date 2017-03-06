import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import SignUpActions from '../actions';
import type { FormField } from "../actions";
import SignUpButton from '../components/SignUpButton';
import TextField from '../components/TextField';
import sceneGenerator from '../../../utils/sceneGenerator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';

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

export class SignUp extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isDateTimePickerVisible: false,
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.props.setFormValue("dob", date);
    this.refs.email.focus();
    this._hideDateTimePicker();
  };

  selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.props.setFormValue("image", source);
        }
      });
    }

  render() {
    return (
      <Image
        style={{ flex: 1, backgroundColor: 'grey', padding: 10, paddingTop: 64, height: null, width: null }}
        source={require('../../../../assets/images/bg2.jpg')}
      >
        <KeyboardAvoidingView behavior='height' style={{ flex: 1 }}>
          <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
              { this.props.image === null ? <Image
                    source={require('../../../../assets/images/name.png')}
                  /> :
                <Image style={styles.avatar} source={this.props.image} />
              }
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TextField
              style={styles.textFieldStyle}
              label={'Name'}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'steelblue'}
              value={this.props.name}
              onChangeText={(text) => {
                this.props.setFormValue("name", text);
              }}
              onSubmitEditing={() => this.refs.number.focus()}
              returnKeyType='next'
            />
            <TextField
              ref='number'
              style={styles.textFieldStyle}
              label={'Phone Number'}
              iconClass={FontAwesomeIcon}
              value={this.props.number}
              iconName={'phone'}
              iconColor={'steelblue'}
              keyboardType="numeric"
              returnKeyType='next'
              onSubmitEditing={() => this.refs.dob.focus()}
              onChangeText={(text) => {
                this.props.setFormValue("number", text);
              }}
            />
            <TextField
              ref='dob'
              style={styles.textFieldStyle}
              label={'DOB'}
              iconClass={FontAwesomeIcon}
              iconName={'calendar'}
              iconColor={'steelblue'}
              onFocus={this._showDateTimePicker}
              value={this.props.dob === null ? this.props.dob : this.props.dob.toLocaleString().split(',')[0]}
            />
            <TextField
              ref='email'
              style={styles.textFieldStyle}
              label={'Email'}
              iconClass={FontAwesomeIcon}
              iconName={'envelope'}
              iconColor={'steelblue'}
              value={this.props.email}
              keyboardType="email-address"
              returnKeyType='next'
              onChangeText={(text) => {
                this.props.setFormValue("email", text);
              }}
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
            <SignUpButton
              containerStyles={styles.signUpBottomStyles}
              color='white' title={' Sign Up '}
              onPress={() => {
                const testEmail =  /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
                if(this.props.image !== null && this.props.name !== "" && this.props.email !== "" && testEmail.test(this.props.email) && this.props.number !== null && this.props.dob !== null) {
                  Actions.ProfileScreen();
                } else {
                  Alert.alert(
                    'Error',
                    'Please fill all the fields correctly',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
                }
              }}
            />
          </View>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            maximumDate={new Date}
          />
        </KeyboardAvoidingView>
      </Image>
    );
  }
}
SignUp.propTypes = {
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  setFormValue: React.PropTypes.func,
  count: React.PropTypes.number,
};

SignUp.defaultProps = {
  increment: () => '',
  decrement: () => '',
  setTripFormValue: (field: FormField, value: any) => '',
  count: 0,
};

const mapStateToProps = state => ({
  name: state.SignUp.name,
  email: state.SignUp.email,
  image: state.SignUp.image,
  male: state.SignUp.male,
  dob: state.SignUp.dob,
  number: state.SignUp.number
});

const mapDispatchToProps = () => SignUpActions;


const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(SignUp);

const generatedScene = sceneGenerator({
  component: reduxConnected,
  initial: true,
  key: 'SignUp',
});

export default generatedScene;
