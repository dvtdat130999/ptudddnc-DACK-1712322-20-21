import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../../globals/styles";
import SectionSkillsItem from "../SectionSkillsItem/section-skills-item";
import {skills} from "../../../../data/skills";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";

const SectionSkills=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const DATA=skills;
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <SectionSkillsItem item={item} key={item.id} navigation={props.navigation}/>
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={themeStyle.title}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default SectionSkills;
