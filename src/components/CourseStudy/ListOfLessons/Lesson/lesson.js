import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
const Lesson=(props)=>{
    const chooseLesson=(props)=>{

        console.log("Choose lesson");
    }
    return(
        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={chooseLesson}>
            <View style={{backgroundColor:'gray',justifyContent:'center',alignItems:'center',width:50,marginLeft:20}}>
                <Text style={{color:'white'}}>{props.stt}</Text>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
                <Text style={{color:'white',fontWeight:'bold'}}>{props.name}</Text>
                <Text style={{color:'white'}}>{props.length}</Text>

            </View>
        </TouchableOpacity>

    );
}

export default Lesson;