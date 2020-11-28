import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import VideoPlayer from "./VideoPlayer/video-player";
import CourseIntroduction from "./CourseIntroduction/course-introduction";
import ListLessons from "./ListOfLessons/list-lessons";
const CourseStudy=(props)=>{
    const listLessons=[
        {
            name:'first lesson',
            length:'1m'
        },
        {
            name:'second lesson',
            length:'2m'
        },
        {
            name:'third lesson',
            length:'3m'
        },

    ]
    const courseInfo={
        name:'React the big picture',
        author:'Cory House',
        level:'beginner',
        createdDate:'28/11/2020',
        length:'1h11m',
        introduction:'You have heard of React, but is it right for you? '
    }

    return(
        <ScrollView>
            <VideoPlayer />
            <CourseIntroduction name={courseInfo.name} author={courseInfo.author} level={courseInfo.level}
                                createdDate={courseInfo.createdDate} length={courseInfo.length} introduction={courseInfo.introduction}/>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:20}}>Contents</Text>

            <ListLessons/>


        </ScrollView>
    );
}

export default CourseStudy