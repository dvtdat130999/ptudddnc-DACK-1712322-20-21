import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import PathIcon from "../../../../../assets/path.png";
import styles from "../../../../globals/styles";
import CourseReadInfo from "../../../Common/course-read-info";
import {navigationName} from "../../../../globals/constants";
import PathReadInfo from "../../../Common/path-read-info";
const SectionPathsItem=(props)=>{
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses,{
            path:props.item,
            navigation:props.navigation

        })
    }
    return (

        <TouchableOpacity style={styles.sectionCourseItem} onPress={onPress}>
            <Image source={PathIcon} style={{width:200,height:200}}/>
            <PathReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default SectionPathsItem;