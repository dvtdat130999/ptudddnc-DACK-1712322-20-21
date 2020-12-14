import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button,TouchableOpacity } from 'react-native';

import ImageButton from "../../Common/image-button";
import SettingIcon from "../../../../assets/setting.png"
import SectionCourses from "./SectionCourses/section-courses";
import SectionCoursesBookmark from "./SectionCoursesBookmark/section-courses-bookmark";
import {navigationName} from "../../../globals/constants";
import {courses} from "../../../data/courses"
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
const Home=(props)=>{
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
    const onPressSetting=()=>{
        props.navigation.navigate(navigationName.Setting,{
            navigation:props.navigation,
        });
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onPressSetting}>
                    <Image
                        source={SettingIcon}
                        style={{width:30,height:30,marginRight:20}}
                    />
                </TouchableOpacity>
                /*<TouchableHighlight onPress={onPressSetting}>
                    <View>
                        <Text styles={{color:'white'}}>Setting</Text>
                    </View>
                </TouchableHighlight>*/
            ),
        });
    }, [props.navigation]);
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <SectionCourses navigation={props.navigation} title="New"/>
                <SectionCourses navigation={props.navigation} title="Trending"/>
                <SectionCoursesBookmark navigation={props.navigation} title="Bookmark"/>
            </View>
        </ScrollView>


    );
}

export default Home;