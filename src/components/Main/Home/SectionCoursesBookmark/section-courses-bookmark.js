import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import {CoursesContext} from "../../../../provider/courses-provider";
import {BookmarkContext} from "../../../../provider/bookmark-provider";
import {AuthenticationContext} from "../../../../provider/authentication-provider";
import {courses} from "../../../../data/courses";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";

const SectionCoursesBookmark=(props)=>{
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
    const {coursesBookmark}=useContext(BookmarkContext);


    const {authentication}=useContext(AuthenticationContext);

    let DATA=[];

    coursesBookmark.map((item,i)=>{
       if(item.user===authentication.id)
       {
           DATA=DATA.concat(item.course);
       }
    });
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
}

export default SectionCoursesBookmark;
