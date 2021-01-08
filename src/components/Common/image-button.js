import React,{useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../globals/styles"
import {navigationName} from "../../globals/constants";
const ImageButton=(props)=>{
    const onPress=()=>{
        if(props.title==="Recommend")
        {
            props.navigation.navigate(navigationName.ListRecommendCourse,{
                navigation:props.navigation,
                message:"From recommend to list course recommend",
            })
        }
        if(props.category)
        {
            props.navigation.navigate(navigationName.ListCourses,{
                category:props.category,
                navigation:props.navigation,
                message:"From category to list course of category",
            })
        }
        else
        {
            if(props.topRate)
            {
                let type="rate";
                props.navigation.navigate(navigationName.ListCourses,{
                    message:"Change to list courses",
                    type:type,
                });
            }
            else
            {
                props.navigation.navigate(navigationName.ListCourses,{
                    message:"Change to list courses",
                });
            }
            
        }



    };
    
    return(
        <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/000/622/344/original/beautiful-background-of-lines-with-gradients-vector.jpg'}}
                         style={props.styleImageButton}
        >
            <TouchableOpacity style={styles.imageButtonTouch}
                              onPress={onPress}
            >
                <Text style={styles.imageButtonText}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default ImageButton;