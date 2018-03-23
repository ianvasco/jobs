import { AsyncStorage, Alert } from 'react-native';
import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from './types';
import { Facebook } from 'expo';

// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');
export const fbLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token) {
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token})
  } else {
    doFbLogin(dispatch);
  }
};

const doFbLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('418622895249864', {
    permissions: ['public_profile']
  });

  if(type === 'cancel'){
    return dispatch({ type: FB_LOGIN_FAIL});
  }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token });

};
