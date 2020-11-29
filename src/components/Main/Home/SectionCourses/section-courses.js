import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses=(props)=>{
    const DATA = [
        {
            id: '1',
            title: 'First course',
            author:'Dat',
            level:'Beginner',
            createdDate:'22/10/2020',
            length:'25m',
            introduction:'This is first course'
        },
        {
            id: '2',
            title: 'Second course',
            author:'Doan',
            level:'Beginner',
            createdDate:'23/10/2020',
            length:'5m',
            introduction:'This is second course'
        },
        {
            id: '3',
            title: 'Third course',
            author:'Vu',
            level:'Intermediate',
            createdDate:'23/10/2020',
            length:'15m',
            introduction:'This is third course'
        },
        {
            id: '4',
            title: 'Fourth course',
            author:'Tien',
            level:'Beginner',
            createdDate:'24/10/2020',
            length:'27m',
            introduction:'This is fourth course'
        },
        {
            id: '5',
            title: 'Fifth course',
            author:'Dat',
            level:'Beginner',
            createdDate:'25/10/2020',
            length:'35m',
            introduction:'This is fifth course'
        },
        {
            id: '6',
            title: 'Sixth course',
            author:'Hay',
            level:'Beginner',
            createdDate:'25/10/2020',
            length:'29m',
            introduction:'This is sixth course'
        },

    ];

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <SectionCoursesItem navigation={props.navigation} item={item} key={item.id} data={DATA}/>
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

export default SectionCourses;