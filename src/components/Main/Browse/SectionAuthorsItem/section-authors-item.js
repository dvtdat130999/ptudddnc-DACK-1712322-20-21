import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import AuthorImage from "../../../../../assets/author.jpg";
import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
import AuthorReadInfo from "../../../Common/author-read-info";
const SectionAuthorsItem=(props)=>{
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses,{
            author:props.item,
            navigation:props.navigation

        })
    }
    return (

        <TouchableOpacity style={styles.sectionAuthorItem} onPress={onPress}>
            <Image source={AuthorImage} style={styles.imageAuthorHome}/>
            <AuthorReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default SectionAuthorsItem;