import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import {CoursesContext} from "../../../../provider/courses-provider";
import {courses} from "../../../../data/courses";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";

const SectionCourses=(props)=>{

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
    const DATA=courses;
    const renderItem=()=>{

        return DATA.map((item,i)=>{

            if(i<10)
            {
                return <SectionCoursesItem navigation={props.navigation} item={item} key={i} data={DATA}/>

            }
            else {
                return <View key={i}></View>
            }
        })
    };
    return(
        <View style={{marginTop:60}}>
            <Text style={themeStyle.title}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );

}

export default SectionCourses;