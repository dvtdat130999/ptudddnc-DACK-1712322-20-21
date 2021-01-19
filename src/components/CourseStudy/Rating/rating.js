import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';

import styles from "../../../globals/styles";

import {ThemeContext} from "../../../provider/theme-provider";
import {AuthenticationContext} from "../../../provider/authentication-provider";

import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import CourseApi from "../../../api/courseApi";
const Rating=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    const {authentication}=useContext(AuthenticationContext);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }

    //state
    const [comment,setComment]=useState(null);
    const [formalityPoint,setFormalityPoint]=useState(null);
    const [presentationPoint,setPresentationPoint]=useState(null);
    const [contentPoint,setContentPoint]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    //function
    const rating=async()=>{
        setIsLoading(true);
        const res=await CourseApi.ratingCourse(authentication,props.item.id,formalityPoint,contentPoint,presentationPoint,comment);
        if(res.message==="OK")
        {
            alert("Rating successfully");
        }
        else
        {
            alert("Rating failed");
        }
        console.log("Check rating res in rating:",res);
        setIsLoading(false);
    }
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }
            <Text style={themeStyle.textBold}>Comment</Text>
            <TextInput style={styles.input} defaultValue={comment} onChangeText={text=>{setComment(text)}}></TextInput>
            <View style={styles.space}/>

            <Text style={themeStyle.textBold}>Formality Point</Text>
            <TextInput style={styles.input} keyboardType='numeric' defaultValue={formalityPoint} onChangeText={text=>{setFormalityPoint(text)}}></TextInput>
            <View style={styles.space}/>

            <Text style={themeStyle.textBold}>Presentation Point</Text>
            <TextInput style={styles.input} keyboardType='numeric' defaultValue={presentationPoint} onChangeText={text=>{setPresentationPoint(text)}}></TextInput>
            <View style={styles.space}/>

            <Text style={themeStyle.textBold}>Content Point</Text>
            <TextInput style={styles.input} keyboardType='numeric' defaultValue={contentPoint} onChangeText={text=>{setContentPoint(text)}}></TextInput>
            <View style={styles.space}/>
            <View style={styles.space}/>

            <TouchableHighlight onPress={rating}>

                <View style={themeStyle.buttonSmall}>
                    <Text style={themeStyle.textButtonSmall}>Rating</Text>
                </View>
            </TouchableHighlight>
            
        </ScrollView>
    )
};

export default Rating;
