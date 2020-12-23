import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button } from 'react-native';

import CourseIntroduction from "./CourseIntroduction/course-introduction";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import CourseApi from "../../api/courseApi";
import ListCourseSection from "./CourseSection/ListCourseSection/list-course-section";
const CourseStudy=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
  

    const [item,setItem]=useState(props.route.params.item);
    const [navigation,setNavigation]=useState(props.route.params.navigation);
    const [learning,setLearning]=useState([]);
    const [courseSection,setCourseSection]=useState(null);
    props.navigation.setOptions({title:item.title});

    const renderLearning=()=>{
        return learning.map((item,i)=>{
            return <Text style={themeStyle.text} key={i}>{`+ ${item}`}</Text>
        })
    }
    const getCourseSection=async()=>{
        const res=await CourseApi.courseDetail(item.id,item.instructorId);
        console.log("Check course section detail by api in course study")
        console.log(res.payload.section);
        setCourseSection(res.payload.section);
        console.log("Check courseSection after get courses");
        consolelog(courseSection);
        
    };
    console.log("Check course section");
    console.log(courseSection);
    useEffect(()=>{
        
        if(item===null)
        {
            setItem(props.route.params.item);
        }
        if(navigation===null)
        {
            setNavigation(props.route.params.navigation)
        }
        if(learning.length===0 && item!==null)
        {
            setLearning(item.learnWhat);
            console.log(learning);
        }
        if(item!==null && courseSection===null)
        {
            console.log("Chuan bi get course section");
            getCourseSection();
        }
    })
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <Image source={{uri:item.imageUrl}} style={{height:400,width:'100%'}}/>
                {props.route.params.searchedCourse ? 
                    <CourseIntroduction item={item} navigation={props.navigation} searchedCourse={true}/>:
                    <CourseIntroduction item={item} navigation={props.navigation} />
                }
                <View style={styles.space}/>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>Contents</Text>
                {renderLearning()}
                <View style={styles.space}/>
                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>Section</Text>
                <ListCourseSection navigation={navigation} courseId={item.id} instructorId={item.instructorId}/>
                {/* <ListLessons navigation={navigation} item={item}/> */}

            </View>
        </ScrollView>
    );
}

export default CourseStudy