import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';

import styles from "../../../globals/styles";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import {navigationName} from "../../../globals/constants";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {ThemeContext} from "../../../provider/theme-provider";
import {LanguageContext} from "../../../provider/language-provider";

import UserApi from "../../../api/userApi";
import MyCoursesItem from "./my-courses-item";
import PaymentCourses from "./PaymentCourses/payment-courses";
import ListDownload from "../Download/list-download";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const MyCoursesTab = createMaterialTopTabNavigator();
const MyCourses=(props)=>{
    const {authentication}=useContext(AuthenticationContext);
    const {changeLanguage}=useContext(LanguageContext);

    const [isLoading,setIsLoading]=useState(true);
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
    
    
    const onPressListCoursesItem=(item,data,navigation)=>{
        props.navigation.navigate(navigationName.CourseStudy,{item,data,navigation});

    }
    const [DATA,setDATA]=useState([]);
    const [processCourses,setProcessCourses]=useState([]);
    const renderItem=()=>{
        
        return DATA.map((item,i)=>{
            
          
            
            return <MyCoursesItem navigation={props.navigation} item={item} key={i} 
                onPressListCoursesItem={onPressListCoursesItem}/>
            
            
        })

    };
    
        
    
    useEffect(()=>{
        // if(processCourses.length===0)
        // {

            
        // }
        // if(DATA!==processCourses)
        // {
        //     setDATA(processCourses);
        
        // }
        const getProcessCourses=async()=>{
            const res=await UserApi.getProcessCourses(authentication);
            setDATA(res.payload);
            setIsLoading(false);
        };
        getProcessCourses();
    });

    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            <MyCoursesTab.Navigator style={{flex:1}}>
                   
                    <MyCoursesTab.Screen name={navigationName.ListCourses} options={{title:changeLanguage.Paid}}
                    >
                        {()=><PaymentCourses navigation={props.navigation}/>}

                    </MyCoursesTab.Screen>
                    
                    <MyCoursesTab.Screen name={navigationName.Authors} options={{title:changeLanguage.Downloaded}}
                    >
                        {()=><ListDownload navigation={props.navigation}/>}
                    </MyCoursesTab.Screen>

                </MyCoursesTab.Navigator>
            {/* { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={{marginTop:60,flex:1}}>
                    <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                    {renderItem()}
            </View> */}
        </ScrollView>

    );

}


export default MyCourses;