import React, {Component, useContext, useEffect,useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import {CoursesContext} from "../../../../provider/courses-provider";
import {AuthenticationContext} from "../../../../provider/authentication-provider";
import {courses} from "../../../../data/courses";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import CourseApi from "../../../../api/courseApi";
import UserApi from "../../../../api/userApi";
import {BookmarkContext} from "../../../../provider/bookmark-provider";
const SectionCoursesBookmark=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    const {coursesBookmark}=useContext(BookmarkContext);
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    
    


    const [DATA,setDATA]=useState([]);
    
    useEffect(()=>{
        if(DATA!==coursesBookmark)
        {
            setDATA(coursesBookmark);
            console.log("Check courses bookmark in section courses bookmark");
            console.log(coursesBookmark);
        }
      
        
    });
    const {authentication}=useContext(AuthenticationContext);
    const getCourseLikeStatus=async(courseId)=>{
        const res=await UserApi.getCourseLikeStatus(authentication,courseId);
        console.log("Check like status in section courses bookmark cua ",courseId);
        console.log(res.likeStatus);
        return res.likeStatus;
    }    
    const renderItem=()=>{

        return DATA.map((item,i)=>{
            if(i<10)
                {
                    return <SectionCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} bookmarked={true}/>
    
                }
                else {
                    return <View key={i}></View>
                }
            
        })
    };
    return(
        <View style={{marginTop:60}}>
            {DATA.length>0 ?
                <View>
                    <Text style={themeStyle.title}>{props.title}</Text>
                    <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                        {renderItem()}
                    </ScrollView>
                </View>
                : <View/>
            }

        </View>
    );
};

export default SectionCoursesBookmark;
