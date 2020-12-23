import React, {useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import AuthorImage from "../../../../../assets/author.jpg";
import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
import AuthorReadInfo from "../../../Common/author-read-info";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
const SectionAuthorsItem=(props)=>{
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
        props.navigation.navigate(navigationName.AuthorDetail,{
            instructor:props.item,
            navigation:props.navigation

        })
    }
    return (

        <TouchableOpacity style={styles.sectionAuthorItem} onPress={onPress}>
            {props.item["user.avatar"] ?
            <Image source={{uri:props.item["user.avatar"]}} style={styles.imageAuthorHome}/>:
            <Image source={AuthorImage} style={styles.imageAuthorHome}/>
        
            }
            <Text style={themeStyle.text}>{props.item["user.name"]}</Text>

        </TouchableOpacity>
    );
}

export default SectionAuthorsItem;