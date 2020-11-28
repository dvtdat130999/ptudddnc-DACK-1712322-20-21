import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../globals/styles";
import AuthorImage from "../../../../assets/author.jpg"
import CourseReadInfo from "../../Common/course-read-info";
import AuthorReadInfo from "../../Common/author-read-info";
const ListAuthorsItem=(props)=>{
    console.log(props.name);
    return (

        <View style={styles.listAuthorsItem}>
            <Image source={AuthorImage} style={styles.imageAuthor}/>
            <AuthorReadInfo name={props.name}/>

        </View>
    );
}

export default ListAuthorsItem;