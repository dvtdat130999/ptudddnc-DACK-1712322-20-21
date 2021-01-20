import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button,TouchableOpacity } from 'react-native';

import SettingIcon from "../../../../assets/setting.png"
import SectionCourses from "./SectionCourses/section-courses";
import SectionCoursesBookmark from "./SectionCoursesBookmark/section-courses-bookmark";
import {navigationName} from "../../../globals/constants";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import CourseApi from "../../../api/courseApi";

import {LanguageContext} from "../../../provider/language-provider";

const Home=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let {changeLanguage}=useContext(LanguageContext);

    let themeStyle;

    
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const onPressSetting=()=>{
        props.navigation.navigate(navigationName.Setting,{
            navigation:props.navigation,
        });
    }
    
     
    
    
    const [first,setFirst]=useState(true);
    
    useEffect(()=>{
        if(first===true)
        {
            


            const getDetail=async()=>{
                const courseId="7844e73e-f61b-4f1b-82ce-f98f120a7c46";
                const res=await CourseApi.courseInfo(courseId);

                console.log("Check res info course:",res.payload);

                

            }
            getDetail();
            setFirst(false);
        }    
        
        
    })
    
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onPressSetting}>
                    <Image
                        source={SettingIcon}
                        style={{width:30,height:30,marginRight:20}}
                    />
                </TouchableOpacity>
                
            ),
        });
    }, [props.navigation]);

    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <SectionCourses navigation={props.navigation} title={changeLanguage.New} isTopNew={true}/>
                <SectionCourses navigation={props.navigation} title={changeLanguage.Trending} isTopSell={true}/>
                <SectionCoursesBookmark navigation={props.navigation} title={changeLanguage.Bookmark}/>
            </View>
        </ScrollView>


    );
}

export default Home;