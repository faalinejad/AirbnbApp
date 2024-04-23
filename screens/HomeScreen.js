import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'
import Cards from '../components/Cards'
import Explore from '../components/Explore'
import Experience from '../components/Experience'

const HomeScreen = () => {
  return (
    <ScrollView>
      <Headers/>
      <Cards/>
      <Explore/>
      <Experience/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})