import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import ImageButton from "../../Common/image-button";

import SectionCourses from "./SectionCourses/section-courses";
const Home=(props)=>{
    const onPressNewReleases=()=>{
        console.log("New releases clicked");
    }
    return(
        <View>
            <ImageButton title="New releases" onPress={onPressNewReleases}/>
            <SectionCourses title="New"/>
            <SectionCourses title="Trending"/>

        </View>


    );
}

export default Home;