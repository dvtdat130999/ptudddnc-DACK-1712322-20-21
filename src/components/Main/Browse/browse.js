import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import ImageButton from "../../Common/image-button";

import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionSkills from "./SectionSkills/section-skills";
import SectionCategories from "./SectionCategories/section-categories";
import styles from "../../../globals/styles"
import SectionPaths from "./SectionPaths/section-paths";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
const Browse=(props)=>{
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
    return(
            <ScrollView style={{backgroundColor:changeTheme.background}}>
                <View style={styles.space}></View>
                <View style={styles.space}></View>

                <ImageButton navigation={props.navigation}  title="Recommend" topRate={true} styleImageButton={styles.imageButtonImageBackground}/>
                <SectionCategories navigation={props.navigation}  title="Categories"/>
                <SectionAuthors navigation={props.navigation}  title="Authors"/>
            </ScrollView>


);
}

export default Browse;