import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import {paths} from"../../../../data/paths"
import styles from "../../../../globals/styles";
import SectionCategoriesItem from "../SectionCategoriesItem/section-categories-item";
import SectionPathsItem from "../SectionPathsItem/section-paths-item";
import {ThemeContext} from "../../../../provider/theme-provider";
import {LanguageContext} from "../../../../provider/language-provider";

import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {navigationName} from "../../../../globals/constants";

const SectionPaths=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let {changeLanguage}=useContext(LanguageContext);

    let themeStyle;
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const DATA = paths;
    const seeAll=()=>{
        props.navigation.navigate(navigationName.Paths,{

        })
    };
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
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={themeStyle.title}>{props.title}</Text>
                <TouchableHighlight style={{marginRight:20}} onPress={seeAll}>
                    <Text style={themeStyle.textMedium}>{changeLanguage.SeeAll}</Text>

                </TouchableHighlight>
            </View>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );}
export default SectionPaths;