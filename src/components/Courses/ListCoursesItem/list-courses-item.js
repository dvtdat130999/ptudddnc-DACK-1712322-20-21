import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import OnlineCourse from "../../../../assets/online-course.jpg";
import CourseReadInfo from "../../Common/course-read-info";
const ListCoursesItem=(props)=>{
    return (

        <TouchableOpacity style={styles.listCoursesItem} onPress={()=>{
                                                            console.log("Press on List Item")
                                                        }}>
            <Image source={OnlineCourse} style={{width:200,height:150}}/>
            <CourseReadInfo title={props.title} author={props.author} level={props.level} createdDate={props.createdDate}/>

        </TouchableOpacity>
    );
}

export default ListCoursesItem;