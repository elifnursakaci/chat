import React from 'react'
import { View ,Text,ActivityIndicator} from 'react-native'


const StartPage = () => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center" }} >
        <ActivityIndicator size="large" color="primary" />
    </View>
  )
}

export default StartPage
