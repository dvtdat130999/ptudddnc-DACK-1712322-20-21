import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import CourseStudyImage from "../../../../assets/course-study.png"
const VideoPlayer=(props)=>{
    return(
        <Image source={CourseStudyImage} style={{width:'100%',height:200}}/>

    );
}

export default VideoPlayer