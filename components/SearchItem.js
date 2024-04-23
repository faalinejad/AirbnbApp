import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchItem = (props) => {
    const data = props.data
    const navigation = useNavigation();
    return (
        <View>
            <Pressable onPress={() => navigation.navigate("Reserve", { 
                id: data.key,
                 img: data.img,
                 description: data.description,
                 lat: data.lat,
                 location: data.location,
                 person: data.person,
                 price: data.price,
                 reveiew: data.reveiew,
                 star: data.star,
                 title: data.title,
                 total: data.total,distanceL: data.distance
                  })} style={{ margin: 10 }}>
                <Image style={{ width: "100%", height: 300, borderRadius: 10 }} source={{ uri: data.img }} />
                <Pressable style={{ position: "absolute", top: 20, right: 20 }}>
                    <AntDesign name="hearto" size={24} color="red" />
                </Pressable>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>{data.location}</Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{data.price}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: "gray" }}>{data.distance} KM away</Text>
                        <Text style={{ fontSize: 16 }}>Dec 12 - 16</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default SearchItem

const styles = StyleSheet.create({})