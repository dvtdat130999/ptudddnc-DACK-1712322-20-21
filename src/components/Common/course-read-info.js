import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../globals/styles"

const CourseReadInfo=(props)=>{
    /*console.log("Check props course read info");

    console.log(props);
    console.log("Check props.item course read info");
    console.log(props.item);*/


    return(
        <View >
            <Text style={styles.sectionCourseItemText}>{props.item.title}</Text>
            <Text style={styles.sectionCourseItemText}>{props.item.author}</Text>
            <Text style={styles.sectionCourseItemText}>{`${props.item.level} . ${props.item.createdDate}`}</Text>
        </View>
    );
}

export default CourseReadInfo;