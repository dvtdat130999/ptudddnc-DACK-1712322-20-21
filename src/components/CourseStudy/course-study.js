import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button } from 'react-native';

import VideoPlayer from "./VideoPlayer/video-player";
import CourseIntroduction from "./CourseIntroduction/course-introduction";
import ListLessons from "./ListOfLessons/list-lessons";
const CourseStudy=(props)=>{
    console.log("Check props of course study");
    console.log(props);

    let item=props.route.params.item;
    props.navigation.setOptions({title:item.title});

    let navigation=props.route.params.navigation;
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
            <CourseIntroduction item={item} navigation={props.navigation}/>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:20}}>Contents</Text>
            <ListLessons navigation={navigation} item={item}/>


        </ScrollView>
    );
}

export default CourseStudy