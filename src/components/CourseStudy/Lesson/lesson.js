import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import {navigationName} from "../../../globals/constants";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";

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
    const onPressLesson=()=>{
       
        
        props.navigation.navigate(navigationName.LessonDetail,{
            lesson:props.item,
            listLesson:props.listLesson,
            navigation:props.navigation
        });
    }
    return (
        <TouchableOpacity style={{flexDirection:'row',marginTop:10,alignItems:'center'}} onPress={onPressLesson} >
            <View style={themeStyle.lessonItem}>
                <Text style={themeStyle.text}>{props.stt}</Text>
            </View>
            <Text style={themeStyle.titleSmall}>{props.item.name}</Text>

            
        </TouchableOpacity>
    );
}

export default Lesson;