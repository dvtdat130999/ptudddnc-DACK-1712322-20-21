import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import {paths} from"../../../../data/paths"
import styles from "../../../../globals/styles";
import SectionCategoriesItem from "../SectionCategoriesItem/section-categories-item";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";

const SectionPaths=(props)=>{
    const DATA = paths;

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(i<10)
            {
                return <SectionPathsItem item={item} key={i} navigation={props.navigation}/>

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
export default SectionPaths;