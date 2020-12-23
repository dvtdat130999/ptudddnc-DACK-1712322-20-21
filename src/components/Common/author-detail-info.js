import styles from "../../globals/styles";
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button } from 'react-native';

import React, {useContext,useState,useEffect} from "react";
import {ThemeContext} from "../../provider/theme-provider";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import ListCourses from "../Courses/ListCourses/list-courses";

const AuthorDetailInfo=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    // const [item,setItem]=useState(null);
    // const [navigation,setNavigation]=useState(null);
    // useEffect(()=>{
    //     if(item===null)
    //     {
    //         if(props.route.params.instructor)
    //         {
    //             setItem(props.route.params.instructor);
    //         }
    //     }
    //     if(navigation===null)
    //     {
    //         if(props.route.params.navigation)
    //         {
    //             setNavigation(props.route.params.navigation);
    //         }
    //     }
    // })
    return(
        <View style={themeStyle.author}>
            <Image source={{uri:props.item["user.avatar"]}} style={{height:400,width:'100%'}}/>

            <Text style={themeStyle.authorText}>{props.item["user.name"]}</Text>
            <Text style={themeStyle.authorText}>{props.item["user.email"]}</Text>
            <Text style={themeStyle.authorText}>{props.item["user.phone"]}</Text>

            <ListCourses navigation={props.navigation} instructor={props.item}message={"This is from author detail info"} />
        </View>
    );
}

export default AuthorDetailInfo;