import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../../globals/styles";
import SectionSkillsItem from "../SectionSkillsItem/section-skills-item";
const SectionSkills=(props)=>{
    const DATA = [
        {
            id: '1',
            name:'Java'
        },
        {
            id: '2',
            name:'C'
        },
        {
            id: '3',
            name:'React'
        },
        {
            id: '4',
            name:'React Native'
        },
        {
            id: '5',
            name:'Communication'
        },


    ];

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <SectionSkillsItem item={item} key={item.id} navigation={props.navigation}/>
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.skillBrowse}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default SectionSkills;
