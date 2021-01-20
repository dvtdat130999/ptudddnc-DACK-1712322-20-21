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
const SectionCoursesItem=(props)=>{
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
    const onPress=()=>{
        props.navigation.navigate(navigationName.CourseStudy,{
            item:props.item,
            navigation:props.navigation

        })
    };
    let bookmarked=false;
    if(props.bookmarked)
    {
        bookmarked=true;
    }

    const [uri,setUri]=useState(null);
    useEffect(()=>{
        if(uri===null)
        {
            if(props.item.imageUrl)
            {
                setUri(props.item.imageUrl);
            }
            else{
                setUri(OnlineCourse);
            }
        }
    })
    return (

        <TouchableOpacity style={themeStyle.sectionCourseItem} onPress={onPress}>
            {props.item.imageUrl ? 
            <Image source={{uri:props.item.imageUrl}} style={{width:'100%',height:300}}/>:
            <Image source={OnlineCourse} style={{width:'100%',height:300}}/>

            
        }
           
                <CourseReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default SectionCoursesItem;