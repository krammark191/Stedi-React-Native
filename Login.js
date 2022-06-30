import { useState, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

const sendText = async phoneNumber => {
  console.log('PhoneNumber: ', phoneNumber)
  await fetch('https://dev.stedi.me/twofactorlogin/' + phoneNumber, {
    method: 'POST',
    headers: { 'Content-Type': 'application/text' }
  })
}

// const getUsername = async () => {
//   await fetch('https://dev.stedi.me/twofactorlogin', {
//     method: 'GET',
//     body: JSON.stringify({ username }),
//     headers: { 'Content-Type': 'application/json' }
//   })
// }

const getToken = async ({ phoneNumber, oneTimePassword, setUserLoggedIn }) => {
  await fetch('https://dev.stedi.me/twofactorlogin', {
    method: 'POST',
    body: JSON.stringify({ oneTimePassword, phoneNumber }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const responseCode = tokenResponse.status
  console.log('Response Status Code: ', responseCode)
  if (responseCode == 200) {
    setUserLoggedIn(true)
  }

  const tokenResponseString = await tokenResponse.text()
  // console.log('Token Response: ', tokenResponseString)
}

const Login = props => {
  const [phoneNumber, setPhoneNumber] = useState('Useless Text')
  const [oneTimePassword, setOneTimePassword] = useState(null)
  const [count, setCount] = useState(0)
  const onPress = () => setCount(prevCount => prevCount + 1)

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholderTextColor='#4251f5'
        placeholder='555-555-5555'
        keyboardType='numeric'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          sendText(phoneNumber)
        }}
      >
        <Text>Get OTP</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder='1234'
        placeholderTextColor='#4251f5'
        keyboardType='numeric'
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          //{
          //  getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn})}
          //}
          {
            props.setUserLoggedIn(true)
          }
        }
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  margin: {
    marginTop: 100
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})

export default Login
