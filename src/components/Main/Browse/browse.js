import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import ImageButton from "../../Common/image-button";

import SectionCourses from "../Home/SectionCourses/section-courses";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionSkills from "./SectionSkills/section-skills";
import SectionCategories from "./SectionCategories/section-categories";
import styles from "../../../globals/styles"
const Browse=(props)=>{
    return(
        <View>
            <ImageButton title="New Releases" styleImageButton={styles.imageButtonImageBackground}/>
            <ImageButton title="Recommend" styleImageButton={styles.imageButtonImageBackground}/>
            <SectionCourses title="Path"/>
            <SectionSkills title="Skills"/>
            <SectionCategories title="Categories"/>
            <SectionAuthors title="Authors"/>
        </View>


);
}

export default Browse;