import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import CourseStudyService from "../CourseStudyService/course-study-service";
import CheckIcon from "../../../../assets/checkicon.png"
import CourseIcon from "../../../../assets/course.png"
import {navigationName} from "../../../globals/constants";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import moment from 'moment';
import { format } from "date-fns";

const CourseIntroduction=(props)=>{
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
    const related=()=>{
        props.navigation.navigate(navigationName.RelatedPathsAndCourses,{
            relatedWithCourse:props.item,
            navigation:props.navigation

        })
        console.log("Press related")
    };
    const takeCheck=()=>{
        console.log("Press check")
    };
    let date=null;
    if(props.searchedCourse)
    {
        date=new Date(props.item.updatedAt);
    }
    else
    {
        date=new Date(props.item.createdAt);

    }
    let dateToFormat=format(date,"dd/MM/yyyy");

    return(
        <View>
            <Text style={themeStyle.titleSmall}>{props.item.title}</Text>
            <View style={styles.space}/>
            {props.searchedCourse ? 
                <Text style={themeStyle.text}>{props.item.name}</Text>:
                <Text style={themeStyle.text}>{props.item["instructor.user.name"]}</Text>
            }
            <View style={styles.space}/>
            <Text style={themeStyle.text}>{dateToFormat} . {props.item.totalHours}</Text>
            <View style={styles.space}/>
            <View style={styles.space}/>

            {/* <TouchableHighlight style={{marginTop:20}} onPress={related}>
                <View style={themeStyle.related}>
                    <Text style={themeStyle.text}>Related paths & courses</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space}/>
            <View style={styles.space}/> */}

            {/* <TouchableHighlight style={{marginTop:20}} onPress={takeCheck}>
                <View style={themeStyle.related}>
                    <Text style={themeStyle.text}>Take a learning check</Text>
                </View>
            </TouchableHighlight> */}
            <CourseStudyService item={props.item}/>
            <View style={styles.space}/>
            <View style={styles.space}/>

            <Text style={themeStyle.text}>{props.item.description}</Text>

        </View>
    );
}

export default CourseIntroduction