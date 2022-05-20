import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainAuthScreen from './MainAuthScreen';
import {Button, HelperText, TextInput} from 'react-native-paper';
import Router from '../../config/router';
import axios from 'axios';

export default function LoginScreen(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {BASE_URL, API_VERSION} = Router();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  const [hidePassword, setHidePassword] = useState(true);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const {data} = await axios({
        method: 'POST',
        url: `${BASE_URL}${API_VERSION}/users/login`,
        data: {
          email: email,
          password: password,
        },
      });
      setResponse(data);
      setLoading(false);
    } catch (error) {
      if (error.response.data !== undefined) {
        setError(error.response.data);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response.access_token !== undefined) {
      navigation.navigate('Home', response);
    }
  }, [response]);

  return (
    <MainAuthScreen {...props}>
      <View style={{justifyContent: 'space-evenly', height: '100%'}}>
        <TextInput
          onChangeText={setEmail}
          label={'Email'}
          value={email}
          mode="outlined"
          onFocus={() => setError({})}
          error={error.message}
        />
        <TextInput
          onChangeText={setPassword}
          label={'Password'}
          value={password}
          onFocus={() => setError({})}
          mode="outlined"
          secureTextEntry={hidePassword}
          right={
            <TextInput.Icon
              name={hidePassword ? 'eye' : 'eye-off'}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
          error={error.message}
        />
        <HelperText type="error" visible={error.message !== undefined}>
          Email address is invalid!
        </HelperText>
        <View style={StylesLogin.actionList}>
          <Text style={StylesLogin.textLink}>Forgot Password ?</Text>
        </View>
        <Button
          loading={loading}
          mode="contained"
          style={StylesLogin.buttonLogin}
          onPress={handleLogin}>
          Login
        </Button>
        <Button
          mode="contained"
          style={[StylesLogin.buttonRegister]}
          labelStyle={{color: '#ed473e'}}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Button>
      </View>
    </MainAuthScreen>
  );
}

const StylesLogin = StyleSheet.create({
  actionList: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textLink: {
    color: 'blue',
    fontSize: 14,
  },
  buttonLogin: {
    marginTop: 10,
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
