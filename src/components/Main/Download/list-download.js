import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import ImageButton from "../../Common/image-button";
import SectionCourses from "../Home/SectionCourses/section-courses";
import ListCourses from "../../Courses/ListCourses/list-courses";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
const Download=(props)=>{
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
    const onPressNewReleases=()=>{
        console.log("New releases clicked");
    }
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <ListCourses navigation={props.navigation} title="Download"/>
            </View>
        </ScrollView>


    );
}

export default Download;