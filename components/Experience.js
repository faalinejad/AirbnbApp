import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Experience = () => {
    return (
        <View style={{ pading: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Discover Airbnb Experiences</Text>
            <ImageBackground style={{ width: 350, height: 450, marginRight: "auto", marginLeft: "auto", borderRadius: 50, marginTop: 10 }} source={{ uri: "https://images.pexels.com/photos/5875918/pexels-photo-5875918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}>
                <View style={{padding: 10}}>
                <Text style={{fontSize: 30, color: "white", fontStyle: "bold", width: 260}}>Things to do on your Trip</Text>
                <Pressable style={{backgroundColor: "white", padding: 10, marginTop: 10, width: 150}}>
                    <Text style={{fontWeight: "bold", textAlign: "center"}}>Experiences</Text>
                </Pressable>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Experience

const styles = StyleSheet.create({})