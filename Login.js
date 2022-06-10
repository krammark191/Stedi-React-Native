import { useState, useRef } from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('Useless Text')
  const [oneTimePassword, setOneTimePassword] = useState(null)

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder='555-555-5555'
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder='1234'
        keyboardType='numeric'
        secureTextEntry={true}
      />
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
  }
})

export default Login
