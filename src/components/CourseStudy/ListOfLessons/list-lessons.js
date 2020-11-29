import React, { Component,useState } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import Lesson from "./Lesson/lesson";

const ListLessons=(props)=>{
    let data=props.data;
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