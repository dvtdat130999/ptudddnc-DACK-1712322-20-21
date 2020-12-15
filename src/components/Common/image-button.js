import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../globals/styles"
import {navigationName} from "../../globals/constants";
const ImageButton=(props)=>{
    console.log("Check image button props");
    console.log(props);
    const onPress=()=>{
        if(props.category)
        {
            props.navigation.navigate(navigationName.Paths,{
                category:props.category,
                navigation:props.navigation,

            })
        }
        else
        {
            props.navigation.navigate(navigationName.ListCourses,{
                message:"Change to list courses",
            });
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