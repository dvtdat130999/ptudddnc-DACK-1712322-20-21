import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../../globals/styles";
import OnlineCourse from "../../../../../assets/online-course.jpg";
import CourseReadInfo from "../../../Common/course-read-info";
const SectionCoursesItem=(props)=>{
    return (

        <View style={styles.sectionCourseItem}>
            <Image source={OnlineCourse} style={{width:200,height:200}}/>
            <CourseReadInfo title={props.title} author={props.author} level={props.level} createdDate={props.createdDate}/>

        </View>
    );
}

export default SectionCoursesItem;