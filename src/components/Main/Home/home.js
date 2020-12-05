import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button,TouchableOpacity } from 'react-native';

import ImageButton from "../../Common/image-button";
import SettingIcon from "../../../../assets/setting.png"
import SectionCourses from "./SectionCourses/section-courses";
import SectionCoursesBookmark from "./SectionCoursesBookmark/section-courses-bookmark";
import {navigationName} from "../../../globals/constants";
import {courses} from "../../../data/courses"
const Home=(props)=>{

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
            <SectionCourses navigation={props.navigation} title="New"/>
            <SectionCourses navigation={props.navigation} title="Trending"/>
            <SectionCoursesBookmark navigation={props.navigation} title="Bookmark"/>
        </ScrollView>


    );
}

export default Home;