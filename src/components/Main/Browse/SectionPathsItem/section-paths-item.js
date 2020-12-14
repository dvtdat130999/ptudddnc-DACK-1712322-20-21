import React, {useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import PathIcon from "../../../../../assets/path.png";
import styles from "../../../../globals/styles";
import CourseReadInfo from "../../../Common/course-read-info";
import {navigationName} from "../../../../globals/constants";
import PathReadInfo from "../../../Common/path-read-info";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
const SectionPathsItem=(props)=>{
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
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses,{
            path:props.item,
            navigation:props.navigation

        })
    }
    return (

        <TouchableOpacity style={themeStyle.sectionCourseItem} onPress={onPress}>
            <Image source={PathIcon} style={{width:200,height:200}}/>
            <PathReadInfo item={props.item}/>

        </TouchableOpacity>
    );
}

export default SectionPathsItem;