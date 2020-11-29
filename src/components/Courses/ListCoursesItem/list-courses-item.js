import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import OnlineCourse from "../../../../assets/online-course.jpg";
import CourseReadInfo from "../../Common/course-read-info";
import {navigationName} from "../../../globals/constants";
const ListCoursesItem=(props)=>{
    console.log("Check list courses item");
    console.log(props);
    const onPressListCoursesItem=()=>{
        props.navigation.navigate(navigationName.CourseStudy,{
            item:props.item,
            data:props.data,
            navigation:props.navigation
        });

    }
    return (

        <TouchableOpacity style={styles.listCoursesItem} onPress={onPressListCoursesItem}>
            <Image source={OnlineCourse} style={{width:200,height:150}}/>
            <CourseReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default ListCoursesItem;