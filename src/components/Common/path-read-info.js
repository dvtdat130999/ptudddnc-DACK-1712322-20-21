import React, {useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../globals/styles"
import {ThemeContext} from "../../provider/theme-provider";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";

const PathReadInfo=(props)=>{
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
   


    return(
        <View >
            <Text style={themeStyle.sectionCourseItemText}>{props.item.name}</Text>
        </View>
    );
}

export default PathReadInfo;