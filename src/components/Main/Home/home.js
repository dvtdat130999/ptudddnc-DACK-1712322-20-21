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
import CourseApi from "../../../api/courseApi";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import UserApi from "../../../api/userApi";
const Home=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    const params={
        limit:10,
        page:1
    };
    const [topNew,setTopNew]=useState(null);
    const [topSell,setTopSell]=useState(null);
    const [user,setUser]=useState(null);
    const [category,setCategory]=useState([]);
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
    const topNewOnChange=async(params)=>{
        // try{
            
        //     const response=await CourseApi.topNew(params);
        //     console.log("Check payload top new");
        //     console.log(response.payload);
        //     return response.payload;

        // }
        // catch(err){
        //     console.log("Failed to fetch:"+err);
        //     return err;
        // }
        const response=await CourseApi.topNew(params);
        
        return response.payload;
    };
    const {authentication}=useContext(AuthenticationContext);
    const topSellOnChange=async(params)=>{
        // try{
            
        //     const response=await CourseApi.topSell(params);
        //     console.log("Check payload top sell");
        //     console.log(response.payload);
        //     return response.payload;
        // }
        // catch(err){
        //     console.log("Failed to fetch:"+err);
        //     return err;
        // }
        const response=await CourseApi.topSell(params);
        
        return response.payload;
        
    };
    
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
                <SectionCourses navigation={props.navigation} title="New" isTopNew={true}/>
                <SectionCourses navigation={props.navigation} title="Trending" isTopSell={true}/>
                <SectionCoursesBookmark navigation={props.navigation} title="Bookmark"/>
            </View>
        </ScrollView>


    );
}

export default Home;