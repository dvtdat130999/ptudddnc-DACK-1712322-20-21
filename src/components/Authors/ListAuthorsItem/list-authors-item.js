import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground ,TouchableOpacity } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import AuthorImage from "../../../../assets/author.jpg"
import CourseReadInfo from "../../Common/course-read-info";
import AuthorReadInfo from "../../Common/author-read-info";
import {navigationName} from "../../../globals/constants";
const ListAuthorsItem=(props)=>{
    console.log("Check props navigation of author");
    console.log(props);
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses);
    }
    return (

        <TouchableOpacity style={styles.listAuthorsItem} onPress={onPress}>
            <Image source={AuthorImage} style={styles.imageAuthor}/>
            <AuthorReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default ListAuthorsItem;