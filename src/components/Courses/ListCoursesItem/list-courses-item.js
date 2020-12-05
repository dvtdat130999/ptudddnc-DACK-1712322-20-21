import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import OnlineCourse from "../../../../assets/online-course.jpg";
import CourseReadInfo from "../../Common/course-read-info";
import {navigationName} from "../../../globals/constants";
const ListCoursesItem=(props)=>{

    const onPressListCoursesItem=()=>{
        props.navigation.navigate(navigationName.CourseStudy,{
            item:props.item,
            navigation:props.navigation
        });

    }
    return (

        <TouchableOpacity style={styles.listCoursesItem} onPress={()=>{
            props.onPressListCoursesItem(props.item,props.data,props.navigation)
        }}>
            <Image source={OnlineCourse} style={{width:200,height:150}}/>
            <CourseReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default ListCoursesItem;