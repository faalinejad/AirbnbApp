import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Headers = () => {
    const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{width:"100%", height: 540}}
        source={{
            uri:"https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }}>
            <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems:'center', marginTop: 30, width:220, borderRadius: 16, padding: 5, marginLeft:'auto', marginRight:'auto'}}>
                <AntDesign name="search1" size={18} color="black" />
                <TextInput style={{paddingHorizontal: 10, fontSize: 16}} placeholder='Enter your Name'/>
            </View>
            <Pressable
            onPress={() => navigation.navigate("Search")}
            
            style={{backgroundColor: 'white', width: 120, borderRadius: 15, marginRight:'auto', marginLeft:'auto', marginBottom:'auto', marginTop:'auto'}}>
                <Text style={{color: 'black', padding: 10, textAlign: 'center', fontWeight: 'bold'}}>I am Flexible</Text>
            </Pressable>
            <View style={{marginLeft:'auto', marginRight: 'auto', marginBottom: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Not Sure Where to Go</Text>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Perfect</Text>
            </View>
      </ImageBackground>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({})