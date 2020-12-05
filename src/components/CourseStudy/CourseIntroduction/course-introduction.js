import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import CourseStudyService from "../CourseStudyService/course-study-service";
import CheckIcon from "../../../../assets/checkicon.png"
import CourseIcon from "../../../../assets/course.png"
import {navigationName} from "../../../globals/constants";
const CourseIntroduction=(props)=>{

    const related=()=>{
        props.navigation.navigate(navigationName.RelatedPathsAndCourses,{
            relatedWithCourse:props.item,
            navigation:props.navigation

        })
        console.log("Press related")
    };
    const takeCheck=()=>{
        console.log("Press check")
    };
    return(
        <View>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:10}}>{props.item.title}</Text>
            <Text style={{color:'white',marginTop:10}}>{props.item.author}</Text>
            <Text style={{color:'white',marginTop:10}}>{props.item.level} . {props.item.createdDate} . {props.item.length}</Text>
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
            <CourseStudyService item={props.item}/>
            <Text style={{color:'white',marginTop:10}}>{props.item.introduction}</Text>

        </View>
    );
}

export default CourseIntroduction