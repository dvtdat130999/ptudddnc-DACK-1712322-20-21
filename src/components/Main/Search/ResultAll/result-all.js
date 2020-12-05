import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCourses from "../../../Courses/ListCourses/list-courses";
import ListPaths from "../../../Paths/ListPaths/list-paths";
import ListAuthors from "../../../Authors/ListAuthors/list-authors";

const ResultAll=(props)=>{

    return(
        <View>
            <View>
                <ListCourses navigation={props.navigation} title="Courses" searchResult={props.resultCoursesSearch}/>
                <ListPaths navigation={props.navigation} title="Paths" searchResult={props.resultPathsSearch}/>
                <ListAuthors navigation={props.navigation} title="Authors" searchResult={props.resultAuthorsSearch}/>
            </View>
        </View>
    );
}

export default ResultAll;