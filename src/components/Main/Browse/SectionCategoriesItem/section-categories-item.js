import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import PathIcon from "../../../../../assets/path.png";
import styles from "../../../../globals/styles";
import CourseReadInfo from "../../../Common/course-read-info";
import {navigationName} from "../../../../globals/constants";
import PathReadInfo from "../../../Common/path-read-info";
import ImageButton from "../../../Common/image-button";
const SectionCategoriesItem=(props)=>{
    
    return (
       <View style={styles.sectionCategoriesItem} >


            <ImageButton navigation={props.navigation} title={props.item.name} styleImageButton={styles.sectionCategoriesItem} category={props.item}/>


        </View>
        
    );
}

export default SectionCategoriesItem;