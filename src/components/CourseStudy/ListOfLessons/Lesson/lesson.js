import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
const Lesson=(props)=>{
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
    // let item;
    // let data;
    // let navigation=props.navigation;
    // if(props.route)
    // {
    //     item=props.route.params.item;
    //     data=props.route.params.data;
    // }
    // else
    // {
    //     item=props.item;
    //     data=props.data;
    // }

    // const chooseLesson=()=>{
    //     console.log("Check navigation before change lesson");
    //     console.log(props.navigation);
    //     props.navigation.navigate(navigationName.CourseStudy,{
    //         item:item,
    //         data:data,
    //     });
    //     console.log("Choose lesson");
    // }

    return(
        <View style={{flexDirection:'row',marginTop:15,alignItems:'center'}} >
            <View style={themeStyle.lessonItem}>
                <Text style={themeStyle.text}>{props.stt}</Text>
            </View>
            <Text style={themeStyle.titleSmall}>{props.item}</Text>

            {/* <View style={{flexDirection:'column',marginLeft:10}}>
                <Text style={themeStyle.text}>{item.length}</Text>

            </View> */}
        </View>

    );
}

export default Lesson;