import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import {authors} from"../../../../data/authors"
import styles from "../../../../globals/styles";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

const SectionAuthors=(props)=>{
    const DATA = authors;

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(i<10)
            {
                return <SectionAuthorsItem item={item} key={i} navigation={props.navigation}/>

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
export default SectionAuthors;