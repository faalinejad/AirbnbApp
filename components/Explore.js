import { FlatList, StyleSheet, Text, View, Image  } from 'react-native'
import React, { useState, useEffect } from 'react'

const Explore = () => {
    const [places, setPlaces] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://www.jsonkeeper.com/b/4G1G")
                .then((response) => response.json())
                .then((data) => setPlaces(data));
        }
        fetchData();
    }, []);
    console.log("Data", places);
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Explore More</Text>
            <FlatList numColumns={2} data={places} renderItem={({ item }) => (
                <View style={{flexDirection:"row", margin: 10}}>
                    <Image style={{width: 50, height: 50}} source={{uri:item.img}}/>
                    <View style={{paddingLeft: 10, backgroundColor:"#72A0C1", paddingTop: 5, width: 120}}>
                    <Text style={{color: "white"}}>{item.location}</Text>
                    <Text>{item.distance}</Text>
                    </View>
                </View>
            )} />
        </View>
    );
};

export default Explore

const styles = StyleSheet.create({})