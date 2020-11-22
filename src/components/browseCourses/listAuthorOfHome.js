import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../styles";
import AuthorOfHome from "./authorOfHome";
import Course from "./course";

const ListAuthorOfHome=(props)=>{
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
            return <AuthorOfHome name={item.name} key={item.id}/>
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.courseOfHome}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default ListAuthorOfHome;
