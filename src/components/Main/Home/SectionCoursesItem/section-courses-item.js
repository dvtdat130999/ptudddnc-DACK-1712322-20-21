import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../../globals/styles";
import OnlineCourse from "../../../../../assets/online-course.jpg";
import CourseReadInfo from "../../../Common/course-read-info";
import {navigationName} from "../../../../globals/constants";
const SectionCoursesItem=(props)=>{
    const onPress=()=>{
        props.navigation.navigate(navigationName.CourseStudy,{
            item:props.item,
            data:props.data,
            navigation:props.navigation

        })
    }
    return (

        <TouchableOpacity style={styles.sectionCourseItem} onPress={onPress}>
            <Image source={OnlineCourse} style={{width:200,height:200}}/>
            <CourseReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default SectionCoursesItem;