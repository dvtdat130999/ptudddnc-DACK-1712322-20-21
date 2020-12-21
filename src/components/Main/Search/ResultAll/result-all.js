import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListPaths from "../../../Paths/ListPaths/list-paths";
import ListAuthors from "../../../Authors/ListAuthors/list-authors";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {ThemeContext} from "../../../../provider/theme-provider";

const ResultAll=(props)=>{
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
    console.log("CHeck props resultCOursesSeach");
    console.log(props.resultCoursesSearch);

    return(
        <View style={{backgroundColor:changeTheme.background}}>
            <View>
                <ListCourses navigation={props.navigation} title="Courses" searchResult={props.resultCoursesSearch}/>
                <ListAuthors navigation={props.navigation} title="Authors" searchResult={props.resultAuthorsSearch}/>
            </View>
        </View>
    );
}

export default ResultAll;