import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../styles";
import Course from "./course";
import CourseOfList from "./courseOfList";
import AuthorOfHome from "./authorOfHome";
import Author from "./author";
const ListAuthor=(props)=>{
    const DATA = [
        {
            id: '1',
            name:'Dat'
        },
        {
            id: '2',
            name:'Doan'
        },
        {
            id: '3',
            name:'Dong'
        },
        {
            id: '4',
            name:'Hay'
        },
        {
            id: '5',
            name:'Tien'
        },
        {
            id: '6',
            name:'Nhan'
        },



    ];

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <Author name={item.name} key={item.id}/>
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.courseOfHome}>{props.title}</Text>
            <ScrollView>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default ListAuthor;