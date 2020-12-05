import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListAuthorsItem from "../ListAuthorsItem/list-authors-item";
import {authors} from "../../../data/authors";

const ListAuthors=(props)=>{
    let DATA;
    console.log("Check props of list author");

    console.log(props);

    if(props.searchResult)
    {
        DATA=props.searchResult;
    }
    else
    {
        DATA=authors;
    }
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <ListAuthorsItem item={item} key={i+1} navigation={props.navigation}/>
        })
    };
    return(
        <View style={{marginTop:30}}>
            <Text style={styles.sectionCoursesTitle}>{props.title}</Text>
            {renderItem()}

        </View>
    );

}

export default ListAuthors;