import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../styles";
import Course from "./course";
import HomeHeader from "./homeHeader";
import ListCourseOfHome from "./listCourseOfHome";
import ListAuthorOfHome from "./listAuthorOfHome";
import ListCourse from "./listCourse";
import ListAuthor from "./listAuthor";
import ListDownload from "./listDownload";
const Home=(props)=>{

    return(
        <View>
            <HomeHeader browserName="Home"/>

            <ScrollView >
                {/*<ListCourseOfHome title="New"/>

                <ListCourseOfHome title="Trending"/>
                <ListCourseOfHome title="Top authors"/>*/}
                <ListDownload title="List Download"/>
            </ScrollView>
        </View>


    );
}

export default Home;