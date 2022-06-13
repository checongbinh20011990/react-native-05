import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function App() {
  GoogleSignin.configure();
  const onLoginGoogle = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo)
  }

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}

          {/* <TouchableOpacity
            onPress={()=>onLoginGoogle()}
          >
            <Text>Login Google</Text>
          </TouchableOpacity> */}
    </View>
  )
}