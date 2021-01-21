import React, {Component, useContext,useEffect,useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions 
    ,SectionList,FlatList,TouchableOpacity,ActivityIndicator } from 'react-native';

import styles from "../../../../globals/styles";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import {CoursesContext} from "../../../../provider/courses-provider";
import {ThemeContext} from "../../../../provider/theme-provider";
import {LanguageContext} from "../../../../provider/language-provider";

import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {navigationName} from "../../../../globals/constants";
import CourseApi from "../../../../api/courseApi";
const SectionCourses=(props)=>{

    let {changeTheme}=useContext(ThemeContext);
    let {changeLanguage}=useContext(LanguageContext);

    let themeStyle;
    const [isLoading,setIsLoading]=useState(true);
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const seeAll=()=>{
        let type=null;
        if(props.isTopNew)
        {
            type="new";
        }
        else
        {
            type="sell";
        }
        props.navigation.navigate(navigationName.ListCourses,{
            message:"This is from section course, we want to see all courses",
            type:type,
        })
    };
    const [DATA,setDATA]=useState([]);
    
    
    
    
    const renderItem=()=>{
        
        return DATA.map((item,i)=>{
            if(i<10)
            {
                return <SectionCoursesItem navigation={props.navigation} item={item} key={i} data={DATA}/>

            }
            else
            {
                <View key={i}></View>
            }
        })
        //return <Text >This is for test</Text>

    };
    useEffect(()=>{
        if(DATA.length===0)
        {
            if(props.isTopNew)
            {
                const params={
                    limit:10,
                    page:1
                };
                const callApiTopNewCourse=async()=>{
                    const response=await CourseApi.topNew(params);
                    setDATA(response.payload);
                    setIsLoading(false);
                };
                callApiTopNewCourse();
                
            }
            if(props.isTopSell)
            {
                const params={
                    limit:10,
                    page:1
                };
                const callApiTopSellCourse=async()=>{
                    const response=await CourseApi.topSell(params);
                    
                    setDATA(response.payload);
                    setIsLoading(false);

                }
                callApiTopSellCourse()
        
            }
        }
       
    })
    return(
        <View style={{marginTop:60}}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={themeStyle.title}>{props.title}</Text>
                <TouchableHighlight style={{marginRight:20}} onPress={seeAll}>
                    <Text style={themeStyle.text}>{changeLanguage.SeeAll}</Text>

                </TouchableHighlight>
            </View>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );

}

export default SectionCourses;