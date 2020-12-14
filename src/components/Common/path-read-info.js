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
    /*console.log("Check props course read info");

    console.log(props);
    console.log("Check props.item course read info");
    console.log(props.item);*/


    return(
        <View >
            <Text style={themeStyle.sectionCourseItemText}>{props.item.name}</Text>
        </View>
    );
}

export default PathReadInfo;