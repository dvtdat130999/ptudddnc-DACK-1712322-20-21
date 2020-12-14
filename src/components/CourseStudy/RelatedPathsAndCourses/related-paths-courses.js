import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListCourses from "../../Courses/ListCourses/list-courses";
import ListPaths from "../../Paths/ListPaths/list-paths";
import ListAuthors from "../../Authors/ListAuthors/list-authors";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";

const RelatedPathsAndCourses=(props)=>{
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
    console.log(props);
    let relatedWithCourse=props.route.params.relatedWithCourse;
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <ListCourses navigation={props.navigation} title="Courses" relatedWithCourse={relatedWithCourse}/>
                <ListPaths navigation={props.navigation} title="Paths" relatedWithCourse={relatedWithCourse}/>
            </View>
        </ScrollView>
    );
}

export default RelatedPathsAndCourses;