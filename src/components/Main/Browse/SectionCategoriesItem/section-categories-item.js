import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import ImageButton from "../../../Common/image-button";
import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
const SectionCategoriesItem=(props)=>{
    const styleItem="styles.sectionCategoriesItem";
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses);
    }
    return (
        <TouchableOpacity style={styles.sectionCategoriesItem} onPress={onPress}>

            <ImageButton navigation={props.navigation} title={props.item.title} styleImageButton={styles.sectionCategoriesItem}/>

        </TouchableOpacity>


    );
}

export default SectionCategoriesItem;