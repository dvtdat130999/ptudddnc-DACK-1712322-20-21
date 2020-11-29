import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import ImageButton from "../../Common/image-button";
import SectionCourses from "../Home/SectionCourses/section-courses";
import ListCourses from "../../Courses/ListCourses/list-courses";

const Download=(props)=>{
    const onPressNewReleases=()=>{
        console.log("New releases clicked");
    }
    return(
        <ScrollView>
            <ListCourses navigation={props.navigation} title="Download"/>

        </ScrollView>


    );
}

export default Download;