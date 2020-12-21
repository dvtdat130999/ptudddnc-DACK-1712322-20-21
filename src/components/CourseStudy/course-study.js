import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button } from 'react-native';

import VideoPlayer from "./VideoPlayer/video-player";
import CourseIntroduction from "./CourseIntroduction/course-introduction";
import ListLessons from "./ListOfLessons/list-lessons";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
const CourseStudy=(props)=>{
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
  

    let item=props.route.params.item;
    props.navigation.setOptions({title:item.title});

    let navigation=props.route.params.navigation;
    

    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <VideoPlayer />
                {props.route.params.searchedCourse ? 
                    <CourseIntroduction item={item} navigation={props.navigation} searchedCourse={true}/>:
                    <CourseIntroduction item={item} navigation={props.navigation} />
                }
                <View style={styles.space}/>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>Contents</Text>
                <ListLessons navigation={navigation} item={item}/>

            </View>
        </ScrollView>
    );
}

export default CourseStudy