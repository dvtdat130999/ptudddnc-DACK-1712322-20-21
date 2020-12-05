import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import ImageButton from "../../Common/image-button";

import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionSkills from "./SectionSkills/section-skills";
import SectionCategories from "./SectionCategories/section-categories";
import styles from "../../../globals/styles"
import SectionPaths from "./SectionPaths/section-paths";
const Browse=(props)=>{
    return(
        <ScrollView>
            <ImageButton navigation={props.navigation} title="New Releases" styleImageButton={styles.imageButtonImageBackground}/>
            <ImageButton navigation={props.navigation}  title="Recommend" styleImageButton={styles.imageButtonImageBackground}/>
            <SectionPaths navigation={props.navigation}  title="Path"/>
            <SectionSkills navigation={props.navigation}  title="Skills"/>
            <SectionCategories navigation={props.navigation}  title="Categories"/>
            <SectionAuthors navigation={props.navigation}  title="Authors"/>
        </ScrollView>


);
}

export default Browse;