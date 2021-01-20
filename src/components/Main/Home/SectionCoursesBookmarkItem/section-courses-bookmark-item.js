import React, {useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../../globals/styles";
import OnlineCourse from "../../../../../assets/online-course.jpg";
import CourseReadInfo from "../../../Common/course-read-info";
import {navigationName} from "../../../../globals/constants";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import CourseApi from "../../../../api/courseApi";
const SectionCoursesBookmarkItem=(props)=>{
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
    const getCourseDetail=async(courseId)=>{
        const res=await CourseApi.courseInfo(courseId);
        setCourseDetail(res.payload);
    }
    const [courseDetail,setCourseDetail]=useState(null);
    const onPress=()=>{
        
        props.navigation.navigate(navigationName.CourseStudy,{
            item:courseDetail,
            navigation:props.navigation

        })
    };
    useEffect(()=>{
        if(courseDetail===null)
        {
            getCourseDetail(props.item.id);
        }
    })

  
    return (

        <TouchableOpacity style={themeStyle.sectionCourseItem} onPress={onPress}>
            {props.item.courseImage ? 
            <Image source={{uri:props.item.courseImage}} style={{width:'100%',height:300}}/>:
            <Image source={OnlineCourse} style={{width:'100%',height:300}}/>

            
        }
            
            <Text style={themeStyle.text}>{props.item.courseTitle}</Text>
            <Text style={themeStyle.text}>{props.item.instructorName}</Text>


        </TouchableOpacity>
    );
}

export default SectionCoursesBookmarkItem;