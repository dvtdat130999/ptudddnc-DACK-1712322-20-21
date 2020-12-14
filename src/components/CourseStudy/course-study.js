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
    console.log("Check props of course study");
    console.log(props);

    let item=props.route.params.item;
    props.navigation.setOptions({title:item.title});

    let navigation=props.route.params.navigation;
    const courseInfo={
        name:'React the big picture',
        author:'Cory House',
        level:'beginner',
        createdDate:'28/11/2020',
        length:'1h11m',
        introduction:'You have heard of React, but is it right for you? '
    }

    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <VideoPlayer />
                <CourseIntroduction item={item} navigation={props.navigation}/>
                <View style={styles.space}/>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>Contents</Text>
                <ListLessons navigation={navigation} item={item}/>

            </View>
        </ScrollView>
    );
}

export default CourseStudy