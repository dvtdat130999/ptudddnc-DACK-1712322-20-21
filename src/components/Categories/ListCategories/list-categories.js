import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import {categories} from "../../../data/categories";
import SectionCategoriesItem from "../../Main/Browse/SectionCategoriesItem/section-categories-item";

const ListCategories=(props)=>{
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
    let DATA;
    console.log("Check props of list author");

    console.log(props);

    if(props.searchResult)
    {
        DATA=props.searchResult;
    }
    else
    {
        DATA=categories;
    }
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <SectionCategoriesItem item={item} key={i+1} navigation={props.navigation}/>
        })
    };
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>

            <View style={{marginTop:60,flex:1}}>
                <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                {renderItem()}
            </View>
        </ScrollView>

    );

}

export default ListCategories;