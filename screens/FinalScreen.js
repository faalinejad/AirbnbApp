import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinalScreen = () => {
  return (
    <View style={{justifyContent: "center", alignItems: "center",  marginTop: "auto", marginBottom: "auto"}}>
      <Text style={{fontSize: 16, fontWeight: "bold"}}>Hooray, your booking has been confirmed!</Text>
      <Text style={{color: "#fd5c63", fontSize: 22, fontWeight: "bold", marginTop: 10}}>Airbnb</Text>
    </View>
  )
}

export default FinalScreen

const styles = StyleSheet.create({})