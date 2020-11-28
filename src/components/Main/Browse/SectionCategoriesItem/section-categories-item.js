import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import ImageButton from "../../../Common/image-button";
import styles from "../../../../globals/styles";
const SectionCategoriesItem=(props)=>{
    const styleItem="styles.sectionCategoriesItem"
    return (
        <View style={styles.sectionCategoriesItem}>

            <ImageButton title={props.title} styleImageButton={styles.sectionCategoriesItem}/>


        </View>


    );
}

export default SectionCategoriesItem;