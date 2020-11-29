import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../globals/styles"
import {navigationName} from "../../globals/constants";
const ImageButton=(props)=>{

    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses);
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