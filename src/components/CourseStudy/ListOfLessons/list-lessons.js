import React, {Component, useContext, useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import {courses} from "../../../data/courses";
import Lesson from "./Lesson/lesson";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";

const ListLessons=(props)=>{
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
    let data=[];
    let path=props.item.path;
    if(path!=='')
    {
        courses.map((item,i)=>{
            if(item.path===path)
            {
                data=data.concat(item);
            }

        })
    }

    let navigation=props.navigation;
    const renderItem=()=>{
        return data.map((item,i)=>{

            return <Lesson navigation={navigation} item={item} key={item.id} stt={i+1} data={data}/>
        })
    }

    return(
        <ScrollView style={{marginTop:10,backgroundColor:changeTheme.background}}>
            <Text style={themeStyle.title}>{props.title}</Text>
            {renderItem()}

        </ScrollView>
    );
}

export default ListLessons