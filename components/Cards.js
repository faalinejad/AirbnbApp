import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Cards = () => {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Inspiration for your next trip</Text>
            <ScrollView horizontal>
            <Pressable style={{ marginTop: 10, margin: 10 }}>
                <Image style={{ width: 190, height: 150, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    source={{ uri: "https://images.pexels.com/photos/5875894/pexels-photo-5875894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                />
                <View style={{ backgroundColor: "orange", width: 190, padding: 10 }}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Chicago</Text>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>250ml away</Text>
                </View>
            </Pressable>

            <Pressable style={{ marginTop: 10, margin: 10 }}>
                <Image style={{ width: 190, height: 150, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    source={{ uri: "https://images.pexels.com/photos/754268/pexels-photo-754268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                />
                <View style={{ backgroundColor: "orange", width: 190, padding: 10 }}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Chicago</Text>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>250ml away</Text>
                </View>
            </Pressable>

            <Pressable style={{ marginTop: 10, margin: 10 }}>
                <Image style={{ width: 190, height: 150, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    source={{ uri: "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                />
                <View style={{ backgroundColor: "orange", width: 190, padding: 10 }}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Chicago</Text>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>250ml away</Text>
                </View>
            </Pressable>

            <Pressable style={{ marginTop: 10, margin: 10 }}>
                <Image style={{ width: 190, height: 150, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    source={{ uri: "https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                />
                <View style={{ backgroundColor: "orange", width: 190, padding: 10 }}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Chicago</Text>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>250ml away</Text>
                </View>
            </Pressable>
            </ScrollView>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({})