import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../../globals/styles";
import SectionCategoriesItem from "../SectionCategoriesItem/section-categories-item";
const SectionCategories=(props)=>{
    const DATA = [
        {
            id: '1',
            title:'Software Development'
        },
        {
            id: '2',
            title:'Business'
        },
        {
            id: '3',
            title:'Conferences'
        },
        {
            id: '4',
            title:'Createive'
        },
        {
            id: '5',
            title:'Math'
        },
        {
            id: '6',
            title:'Project'
        },



    ];

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <SectionCategoriesItem item={item} key={item.id} navigation={props.navigation}/>
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.categoriesBrowse}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default SectionCategories;
