import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import CourseStudyService from "../CourseStudyService/course-study-service";
import CheckIcon from "../../../../assets/checkicon.png"
import CourseIcon from "../../../../assets/course.png"
const CourseIntroduction=(props)=>{
    const related=(props)=>{
        console.log("Press related")
    };
    const takeCheck=(props)=>{
        console.log("Press check")
    };
    return(
        <View>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:10}}>{props.name}</Text>
            <Text style={{color:'white',marginTop:10}}>{props.author}</Text>
            <Text style={{color:'white',marginTop:10}}>{props.level} . {props.createdDate} . {props.length}</Text>
            <TouchableHighlight style={{marginTop:20}} onPress={related}>
                <View style={{height:40,borderRadius:5,backgroundColor:'gray',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{color:'white'}}>Related paths & courses</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={{marginTop:20}} onPress={takeCheck}>
                <View style={{height:40,borderRadius:5,backgroundColor:'gray',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>Take a learning check</Text>
                </View>
            </TouchableHighlight>
            <CourseStudyService/>
            <Text style={{color:'white',marginTop:10}}>{props.introduction}</Text>

        </View>
    );
}

export default CourseIntroduction