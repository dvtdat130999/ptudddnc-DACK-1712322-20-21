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
    /*const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses,{
            category:props.item,
            navigation:props.navigation,
            message:"Message from section category to list courses",


        })
    }*/
   
    return (
       <View style={styles.sectionCategoriesItem} >


            <ImageButton navigation={props.navigation} title={props.item.name} styleImageButton={styles.sectionCategoriesItem} category={props.item}/>


        </View>
        /*<ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/000/622/344/original/beautiful-background-of-lines-with-gradients-vector.jpg'}}
                         style={styles.sectionCategoriesItem}
        >
            <TouchableOpacity style={styles.imageButtonTouch}
                                  onPress={onPress}
                >
                    <Text style={styles.imageButtonText}>
                        {props.item.name}
                    </Text>
                </TouchableOpacity>
        </ImageBackground>*/
    );
}

export default SectionCategoriesItem;