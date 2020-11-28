import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
const ListCourses=(props)=>{
    const DATA = [
        {
            id: '1',
            title: 'First course',
            author:'Dat',
            level:'Beginner',
            createdDate:'22/10/2020',
        },
        {
            id: '2',
            title: 'Second course',
            author:'Doan',
            level:'Beginner',
            createdDate:'23/10/2020',
        },
        {
            id: '3',
            title: 'Third course',
            author:'Vu',
            level:'Intermediate',
            createdDate:'23/10/2020',
        },
        {
            id: '4',
            title: 'Fourth course',
            author:'Tien',
            level:'Beginner',
            createdDate:'24/10/2020',
        },
        {
            id: '5',
            title: 'Fifth course',
            author:'Dat',
            level:'Beginner',
            createdDate:'25/10/2020',
        },
        {
            id: '6',
            title: 'Sixth course',
            author:'Hay',
            level:'Beginner',
            createdDate:'25/10/2020',
        },

    ];

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <ListCoursesItem title={item.title} author={item.author} level={item.level} createdDate={item.createdDate} key={item.id}/>
        })
    };
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.sectionCoursesTitle}>{props.title}</Text>
            {renderItem()}

        </View>
    );

}

export default ListCourses;