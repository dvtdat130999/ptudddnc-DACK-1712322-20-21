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
import {MyCoursesContext} from "../../../provider/mycourses-provider";
import {BookmarkContext} from "../../../provider/bookmark-provider";
import PaymentApi from "../../../api/paymentApi";
import UserApi from "../../../api/userApi";
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
    
     
    
    const {authentication}=useContext(AuthenticationContext);
    const {coursesBookmark,setCoursesBookmark}=useContext(BookmarkContext);
    const [allCourses,setAllCourses]=useState([]);
    const {myCourses,setMyCourses}=useContext(MyCoursesContext);
    const [detail,setDetail]=useState(null);
    const [search,setSearch]=useState([]);
    const [beforeDetail,setBeforeDetail]=useState([]);
    const [first,setFirst]=useState(true);
    
    useEffect(()=>{
        if(first===true)
        {
            const update=async()=>{
                const avatar="https://c7.uihere.com/files/592/884/975/programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.jpg";
                const res=await UserApi.updateProfile(authentication,"Doan Vu Tien Dat",avatar,"012386313231");
                console.log("Check res update profile:",res);
            }
            update();
            setFirst(false);
        }    
        
        
    })
    
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onPressSetting}>
                    <Image
                        source={SettingIcon}
                        style={{width:30,height:30,marginRight:20}}
                    />
                </TouchableOpacity>
                
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