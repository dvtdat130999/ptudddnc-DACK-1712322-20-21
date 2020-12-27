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
    const params={
        limit:20,
        page:1
    };
     
    const getAllCourse=async()=>{
        const res=await CourseApi.topSell(params);
        setAllCourses(res.payload);
    }
    const {authentication}=useContext(AuthenticationContext);
    const {coursesBookmark,setCoursesBookmark}=useContext(BookmarkContext);
    const [first,setFirst]=useState(true);
    const [allCourses,setAllCourses]=useState([]);
    const {myCourses,setMyCourses}=useContext(MyCoursesContext);
    useEffect(()=>{
        
        // if(allCourses.length===0)
        // {
        //     getAllCourse();
        // }
        // if(myCourses.length===0 && allCourses.length>0)
        // {
        //     allCourses.map((item,i)=>{
        //         const getMyCourses=async()=>{
        //             const res=await PaymentApi.getCourseInfo(item.id,authentication);
        //             if(res.didUserBuyCourse===true)
        //             {
        //                 let temp=myCourses;
        //                 temp=temp.concat(item);
        //                 setMyCourses(temp);
        //                 // let existed=false;
        //                 // DATA.map((dataItem,j)=>{
        //                 //     if(dataItem===item)
        //                 //     {
        //                 //         existed=true;
        //                 //     }
        //                 // })
        //                 // if(existed===false)
        //                 // {
        //                 //     let temp=DATA;
        //                 //     temp=temp.concat(item);
        //                 //     setDATA(temp);
        //                 // }
                        
        //                 // setTotalCourseBought(totalCourseBought+1);   
        //                 // console.log("this is after set length total");
        //                 // console.log(totalCourseBought);                     
        //             }
        //         }
        //         getMyCourses();
        //     })
            
        // }
        // console.log("Check my courses in home")
        //     console.log(myCourses);
  
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