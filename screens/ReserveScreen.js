import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import moment from "moment";
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DateRangePicker from 'rnv-date-range-picker';

const ReserveScreen = () => {
    const [selectedRange, setRange] = useState({});
    const route = useRoute();
    const navigation = useNavigation();
    // console.log(route.params)
    const day = new Date(selectedRange.firstDate);
    const night = new Date(selectedRange.secondDate);
    const diffTime = Math.abs(day - night);

    const days = Math.ceil(diffTime/(1000*60*60*24))
    // console.log(days)
    return (
        <>
        <ScrollView>
            <Image style={{ width: "100%", height: 190 }} source={{ uri: route.params.img }} />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{route.params.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                    <FontAwesome name="star" size={24} color="#fd5c63" />
                    <Text style={{ paddingHorizontal: 10 }}>{route.params.star}</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>{route.params.location}</Text>
                </View>
                <Text style={{ height: 1, borderWidth: 1, marginTop: 7, borderColor: "#d8d8d8" }} />
                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>This is a rare find</Text>
                        <Text style={{ fontSize: 14, marginTop: 7 }}>{route.params.person}'s name on Airbnb is usually fully booked</Text>
                    </View>
                    <FontAwesome name="diamond" size={24} color="purple" />
                </View>
                <Text style={{ height: 1, borderWidth: 1, marginTop: 10, borderColor: "#d8d8d8" }} />
                <View style={{ marginTop: 15 }}>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Hosted by {route.params.person}</Text>
                        <Text style={{ color: "purple", fontWeight: "bold", marginTop: 7 }}>{route.params.description}</Text>
                    </View>
                    <Text style={{ height: 1, borderWidth: 1, marginTop: 10, borderColor: "#d8d8d8" }} />
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <FontAwesome name="home" size={28} color="black" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Enier Home</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}>You will have the treehouse to yourself</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <FontAwesome name="smile-o" size={24} color="black" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Enhanced Clean</Text>
                            <Text style={{ fontSize: 16, color: "gray", width: 300 }}>The host commited to 5-step enhanced cleaning process</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <FontAwesome6 name="location-dot" size={24} color="black" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Creat Location</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}>100% of the recent guests gave the location 5 star rating</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <FontAwesome name="calendar" size={24} color="black" />
                        <View style={{ marginLeft: 10 }}>
                            {/* <Text style={{fontSize: 16, fontWeight: "bold"}}>Enier Home</Text> */}
                            <Text style={{ fontSize: 16, color: "gray" }}>Free Canelation Available</Text>
                        </View>
                    </View>
                    <Text style={{ height: 1, borderWidth: 1, marginTop: 12, borderColor: "#d8d8d8" }} />
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Where you'll sleep</Text>
                    <View style={{ marginTop: 8, borderColor: "gray", borderWidth: 1, borderRadius: 10, width: 120, height: 80, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="bed" size={24} color="black" />
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bedroom</Text>
                        <Text>1 double bed</Text>
                    </View>
                    <Text style={{ height: 1, borderWidth: 1, marginTop: 12, borderColor: "#d8d8d8" }} />
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>What this place offers</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
                            <MaterialCommunityIcons name="silverware-fork-knife" size={28} color="black" />
                            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 10 }} >Kitchen</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 12, alignItems: "center" }}>
                            <FontAwesome6 name="wifi" size={24} color="black" />
                            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 10 }} >Wifi</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 12, alignItems: "center" }}>
                            <FontAwesome name="car" size={24} color="black" />
                            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 10 }} >Free Parking on Premises</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 12, alignItems: "center" }}>
                            <MaterialIcons name="pets" size={24} color="black" />
                            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 10 }} >Pets</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 12, alignItems: "center" }}>
                            <FontAwesome5 name="gas-pump" size={24} color="black" />
                            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 10 }} >Free Charge</Text>
                        </View>
                    </View>
                    <Text style={{ height: 1, borderWidth: 1, marginTop: 12, borderColor: "#d8d8d8" }} />
                    <DateRangePicker
                        onSelectDateRange={(range) => {
                            setRange(range);
                        }}
                        blockSingleDateSelection={true}
                        responseFormat="YYYY-MM-DD"
                        minDate={moment()}
                    />
                    <View style={styles.container}>
                        {!selectedRange.firstDate && !selectedRange.secondDate ? (
                            null
                        ) : (
                            <>
                                <View style={{flexDirection: "row", alignItems: "center", padding:  10}}>
                                    <Text style={{fontSize: 17}}>{selectedRange.firstDate} - </Text>
                                    <Text style={{fontSize: 17}}>{selectedRange.secondDate}</Text>
                                </View>

                            </>

                        )}

                    </View>

                </View>
            </View>
        </ScrollView>
        <Pressable style={{backgroundColor: "#AFD8F5", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15}}>
            <Text  style={{fontSize: 18, fontWeight: "bold"}}>{route.params.price}</Text>
            <Pressable onPress={() => navigation.navigate("Confirm", {
                img: route.params.img,
                title: route.params.title,
                location: route.params.location,
                description: route.params.description,
                price: route.params.price, 
                no_of_days: days,
                startDate: selectedRange.firstDate,
                endDate: selectedRange.secondDate,
                star: route.params.star,
                person: route.params.person,
            })} disabled={!selectedRange.firstDate && !selectedRange.secondDate} style={{backgroundColor: "#fd5c63", padding: 10}}>
                        <Text style={{color: "white"}}>Reserve</Text>
            </Pressable>

        </Pressable>
        </>
    )
}

export default ReserveScreen

const styles = StyleSheet.create({})