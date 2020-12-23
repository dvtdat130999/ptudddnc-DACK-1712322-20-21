import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground ,TouchableOpacity } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import AuthorImage from "../../../../assets/author.jpg"
import CourseReadInfo from "../../Common/course-read-info";
import AuthorReadInfo from "../../Common/author-read-info";
import {navigationName} from "../../../globals/constants";
const ListAuthorsItem=(props)=>{
    const onPress=()=>{
        props.navigation.navigate(navigationName.AuthorDetail,{
            instructor:props.item,
            navigation:props.navigation

        })
    }
    return (

        <TouchableOpacity style={styles.listAuthorsItem} onPress={onPress}>
            {props.item["user.avatar"] ?
            <Image source={{uri:props.item["user.avatar"]}} style={styles.imageAuthorHome}/>:
            <Image source={AuthorImage} style={styles.imageAuthorHome}/>
        
            }
            <AuthorReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default ListAuthorsItem;