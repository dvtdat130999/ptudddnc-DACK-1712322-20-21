import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import Lesson from "./Lesson/lesson";

const ListLessons=(props)=>{
    const DATA=[
        {
            id:1,
            stt:1,
            name:'first lesson',
            length:'25m'
        },
        {
            id:2,
            stt:2,
            name:'Second lesson',
            length:'30m'
        },
        {
            id:3,
            stt:3,
            name:'Third lesson',
            length:'35m'
        },
        {
            id:4,
            stt:4,
            name:'Fourth lesson',
            length:'15m'
        },
        {
            id:5,
            stt:5,
            name:'Fifth lesson',
            length:'5m'
        },
        {
            id:6,
            stt:6,
            name:'Sixth lesson',
            length:'55m'
        },


    ];
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <Lesson name={item.name} key={item.id} stt={item.stt} length={item.length}/>
        })
    }

    return(
        <View style={{marginTop:10}}>
            <Text style={styles.authorBrowse}>{props.title}</Text>
            <ScrollView >
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default ListLessons