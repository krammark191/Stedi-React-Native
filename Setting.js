import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Setting(props) {
    return(
      <View>
        <Text>Welcome {props.loggedInUser}</Text>
      <Button
      title="Button"
      onPress={() => Alert.alert('Congrats! You clicked the button!')}
    />
      </View>
    )
  }

export default Setting;