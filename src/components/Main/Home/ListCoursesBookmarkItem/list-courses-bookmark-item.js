import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../../globals/styles";
import OnlineCourse from "../../../../../assets/online-course.jpg";
import CourseReadInfo from "../../../Common/course-read-info";
import {navigationName} from "../../../../globals/constants";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {ThemeContext} from "../../../../provider/theme-provider";
import CourseApi from "../../../../api/courseApi";

const ListCoursesBookmarkItem=(props)=>{
    
    // const onPressListCoursesItem=()=>{
    //     props.navigation.navigate(navigationName.CourseStudy,{
    //         item:props.item,
    //         navigation:props.navigation
    //     });

    // }
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
    useEffect(()=>{
        if(courseDetail===null)
        {
            getCourseDetail(props.item.id);
        }
    })
    const onPress=()=>{
        
        props.navigation.navigate(navigationName.CourseStudy,{
            item:courseDetail,
            navigation:props.navigation

        })
    };
    return (

        <TouchableOpacity style={styles.listCoursesItem} onPress={onPress}>
            <Image source={{uri:props.item.courseImage}} style={{width:150,height:150}}/>

            <Text style={themeStyle.text}>{props.item.courseTitle}</Text>
            <Text style={themeStyle.text}>{props.item.instructorName}</Text>


        </TouchableOpacity>
    );
}

export default ListCoursesBookmarkItem;