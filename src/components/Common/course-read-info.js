import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../globals/styles"

const CourseReadInfo=(props)=>{
    return(
        <View >
            <Text style={styles.sectionCourseItemText}>{props.title}</Text>
            <Text style={styles.sectionCourseItemText}>{props.author}</Text>
            <Text style={styles.sectionCourseItemText}>{`${props.level} . ${props.createdDate}`}</Text>
        </View>
    );
}

export default CourseReadInfo;