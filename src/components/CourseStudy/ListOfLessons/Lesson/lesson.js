import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
const Lesson=(props)=>{
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
    let item;
    let data;
    let navigation=props.navigation;
    if(props.route)
    {
        item=props.route.params.item;
        data=props.route.params.data;
    }
    else
    {
        item=props.item;
        data=props.data;
    }

    const chooseLesson=()=>{
        console.log("Check navigation before change lesson");
        console.log(props.navigation);
        props.navigation.navigate(navigationName.CourseStudy,{
            item:item,
            data:data,
        });
        console.log("Choose lesson");
    }

    return(
        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={chooseLesson}>
            <View style={themeStyle.lessonItem}>
                <Text style={themeStyle.text}>{props.stt}</Text>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
                <Text style={themeStyle.titleSmall}>{item.title}</Text>
                <Text style={themeStyle.text}>{item.length}</Text>

            </View>
        </TouchableOpacity>

    );
}

export default Lesson;