import React, { Component,useState } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import {courses} from "../../../data/courses";
import Lesson from "./Lesson/lesson";

const ListLessons=(props)=>{
    let data=[];
    let path=props.item.path;
    if(path!=='')
    {
        courses.map((item,i)=>{
            if(item.path===path)
            {
                data=data.concat(item);
            }

        })
    }

    let navigation=props.navigation;
    const renderItem=()=>{
        return data.map((item,i)=>{

            return <Lesson navigation={navigation} item={item} key={item.id} stt={i+1} data={data}/>
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