import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import {categories} from"../../../../data/categories"
import styles from "../../../../globals/styles";
import SectionCategoriesItem from "../SectionCategoriesItem/section-categories-item";

const SectionCategories=(props)=>{
    const DATA = categories;

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(i<10)
            {
                return <SectionCategoriesItem item={item} key={i} navigation={props.navigation}/>

            }
            else
            {
                return <View key={i}></View>
            }
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.categoriesBrowse}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );}
export default SectionCategories;