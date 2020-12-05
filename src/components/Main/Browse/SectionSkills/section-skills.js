import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../../globals/styles";
import SectionSkillsItem from "../SectionSkillsItem/section-skills-item";
import {skills} from "../../../../data/skills";

const SectionSkills=(props)=>{
    const DATA=skills;
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
