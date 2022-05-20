import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import Router from '../../config/router';
import MainAuthScreen from './MainAuthScreen';

export default function RegisterScreen(props) {
  const {navigation} = props;
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  const {BASE_URL, API_VERSION} = Router();
  const handleChangeFormInput = (key, value) => {
    setInput({...input, [key]: value});
  };
  const handleRegister = async () => {
    try {
      setLoading(true);
      const {data} = await axios({
        method: 'POST',
        url: `${BASE_URL}${API_VERSION}/users/register`,
        data: {
          full_name: input.name,
          email: input.email,
          password: input.password,
        },
      });
      setResponse(data.data);
      setLoading(false);
    } catch (error) {
      if (error?.response?.data !== undefined) {
        setError(error?.response?.data);
      } else {
        alert(error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(response);
    if (response.access_token !== undefined) {
      navigation.navigate('Home', response);
    }
  }, [response]);

  return (
    <MainAuthScreen {...props}>
      <ScrollView>
        <TextInput
          onChangeText={value => handleChangeFormInput('name', value)}
          label={'Name'}
          value={input.name}
          mode="outlined"
        />
        <TextInput
          onChangeText={value => handleChangeFormInput('email', value)}
          label={'Email'}
          value={input.email}
          mode="outlined"
        />
        <TextInput
          onChangeText={value => handleChangeFormInput('password', value)}
          label={'Password'}
          value={input.password}
          mode="outlined"
          secureTextEntry={hidePassword}
          right={
            <TextInput.Icon
              name={hidePassword ? 'eye' : 'eye-off'}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
        <TextInput
          onChangeText={value =>
            handleChangeFormInput('confirm_password', value)
          }
          secureTextEntry={true}
          label={'Confirm Password'}
          value={input.confirm_password}
          mode="outlined"
        />
        {input.confirm_password !== input.password && (
          <HelperText
            type="error"
            visible={input.confirm_password !== input.password}>
            Password Not Same
          </HelperText>
        )}
        {error.message !== undefined && (
          <HelperText
            type="error"
            visible={error.message !== undefined}
            style={{
              textAlign: 'center',
            }}>
            {error.message.toUpperCase()}
          </HelperText>
        )}
        <Button
          loading={loading}
          mode="contained"
          style={[StylesLogin.buttonLogin]}
          onPress={handleRegister}>
          Sign Up
        </Button>
        <Button
          mode="contained"
          style={StylesLogin.buttonRegister}
          labelStyle={{color: '#ed473e'}}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Button>
      </ScrollView>
    </MainAuthScreen>
  );
}

const StylesLogin = StyleSheet.create({
  actionList: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLink: {
    color: 'blue',
    fontSize: 14,
  },
  buttonLogin: {
    borderRadius: 10,
    minHeight: 50,
    justifyContent: 'center',
    backgroundColor: '#ed473e',
  },
  buttonRegister: {
    marginTop: 10,
    borderRadius: 10,
    minHeight: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#ed473e',
    borderWidth: 1,
  },
});
