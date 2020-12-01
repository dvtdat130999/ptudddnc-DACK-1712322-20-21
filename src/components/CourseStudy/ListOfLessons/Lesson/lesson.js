import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
const Lesson=(props)=>{
    let item;
    let data;
    let navigation=props.navigation;
    if(props.route)
    {
        item=props.route.params.item;
        data=props.route.params.data;
    }
    else
    {
        item=props.item;
        data=props.data;
    }

    const chooseLesson=()=>{
        console.log("Check navigation before change lesson");
        console.log(props.navigation);
        props.navigation.navigate(navigationName.CourseStudy,{
            item:item,
            data:data,
        });
        console.log("Choose lesson");
    }

    return(
        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={chooseLesson}>
            <View style={{backgroundColor:'gray',justifyContent:'center',alignItems:'center',width:50,marginLeft:20}}>
                <Text style={{color:'white'}}>{props.stt}</Text>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
                <Text style={{color:'white',fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{color:'white'}}>{item.length}</Text>

            </View>
        </TouchableOpacity>

    );
}

export default Lesson;