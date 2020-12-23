import React, {Component, useContext, useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import ListCourseSectionItem from "../ListCourseSectionItem/list-course-section-item";
import CourseApi from "../../../../api/courseApi";
const ListCourseSection=(props)=>{
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
    const [DATA,setDATA]=useState([]);
    
    //let path=props.item.path;
    // if(path!=='')
    // {
    //     courses.map((item,i)=>{
    //         if(item.path===path)
    //         {
    //             data=data.concat(item);
    //         }

    //     })
    // }

    const [navigation,setNavigation]=useState(props.navigation);
    const renderItem=()=>{
        return DATA.map((item,i)=>{

            return <ListCourseSectionItem navigation={navigation} item={item} key={i} stt={i+1} DATA={DATA}/>
        })
        //return <View></View>
    }
    const getCourseSection=async()=>{
        const res=await CourseApi.courseDetail(props.courseId,props.instructorId);
        setDATA(res.payload.section);
        
        
    };
    useEffect(()=>{
        if(DATA.length===0)
        {
            getCourseSection();
        }
        
    })
    return(
        <View style={{backgroundColor:changeTheme.background}}>
            <Text style={themeStyle.title}>{props.title}</Text>
            {renderItem()}

        </View>
    );
}

export default ListCourseSection