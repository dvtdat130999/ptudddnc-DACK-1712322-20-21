import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import {paths} from "../../../data/paths";
import ListPathsItem from "../ListPathsItem/list-paths-item";

const ListPaths=(props)=>{
    let DATA;
    console.log("Check props of list paths");
    console.log(props);
    let category;
    if(props.relatedWithCourse)
    {
        category=props.relatedWithCourse.category;
    }
    if(props.searchResult)
    {
        DATA=props.searchResult;
    }
    else
    {
        DATA=paths;
    }
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(category)
            {
                if(category===item.category)
                {
                    return <ListPathsItem item={item} key={i+1} navigation={props.navigation}/>

                }
                else
                {
                    return <View key={i+1}/>
                }
            }
            return <ListPathsItem item={item} key={i+1} navigation={props.navigation}/>
        })
    };
    return(
        <View style={{marginTop:30}}>
            <Text style={styles.sectionCoursesTitle}>{props.title}</Text>
            {renderItem()}

        </View>
    );

}

export default ListPaths;