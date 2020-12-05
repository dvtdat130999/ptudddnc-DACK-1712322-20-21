import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import {CoursesContext} from "../../../../provider/courses-provider";
import {BookmarkContext} from "../../../../provider/bookmark-provider";
import {AuthenticationContext} from "../../../../provider/authentication-provider";
import {courses} from "../../../../data/courses";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCoursesBookmark=(props)=>{

    const {coursesBookmark}=useContext(BookmarkContext);
    if(!coursesBookmark)
    {
        return <View></View>
    }

    const {authentication}=useContext(AuthenticationContext);

    let DATA=[];

    coursesBookmark.map((item,i)=>{
       if(item.user===authentication.user.fullname)
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
            <Text style={styles.courseOfHome}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default SectionCoursesBookmark;
