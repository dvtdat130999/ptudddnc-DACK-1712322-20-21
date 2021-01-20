import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import OnlineCourse from "../../../../assets/online-course.jpg";
import {navigationName} from "../../../globals/constants";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import CourseApi from "../../../api/courseApi";
const MyCoursesItem=(props)=>{
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
    const onPressListCoursesItem=async()=>{
        const res=await CourseApi.courseInfo(props.item.id);
        props.navigation.navigate(navigationName.CourseStudy,{
            item:res.payload,
            navigation:props.navigation
        });

    }
    
    return (

        <TouchableOpacity style={styles.listCoursesItem} onPress={onPressListCoursesItem}
        >
            {props.item.courseImage!==null ?             
            <Image source={{uri:props.item.courseImage}} style={{width:150,height:150}}/>:
            <Image source={OnlineCourse} style={{width:150,height:150}}/>

            }
            <View style={{padding:5,height:250}}>
                <Text style={themeStyle.textMedium}>{props.item.courseTitle}</Text>
                
                <Text style={themeStyle.text}>{props.item.instructorName}</Text>



             </View>
            
        </TouchableOpacity>
    );
}

export default MyCoursesItem;