import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListCourses from "../../Courses/ListCourses/list-courses";
import ListPaths from "../../Paths/ListPaths/list-paths";
import ListAuthors from "../../Authors/ListAuthors/list-authors";

const RelatedPathsAndCourses=(props)=>{
    console.log(props);
    let relatedWithCourse=props.route.params.relatedWithCourse;
    return(
        <ScrollView>
            <View>
                <ListCourses navigation={props.navigation} title="Courses" relatedWithCourse={relatedWithCourse}/>
                <ListPaths navigation={props.navigation} title="Paths" relatedWithCourse={relatedWithCourse}/>
            </View>
        </ScrollView>
    );
}

export default RelatedPathsAndCourses;