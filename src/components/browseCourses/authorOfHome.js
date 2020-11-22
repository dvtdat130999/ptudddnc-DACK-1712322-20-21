import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../styles";
import OnlineCourse from "../image/online-course.jpg";
import Author from "../image/author.jpg"
const AuthorOfHome=(props)=>{
    return(
        <View style={styles.authorHome}>
            <Image source={Author} style={styles.imageAuthorHome}/>
            <Text style={styles.authorText}>{props.name}</Text>

        </View>
    );
}

export default AuthorOfHome;