import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';

import styles from "../../../../globals/styles";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";
import {navigationName} from "../../../../globals/constants";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {AuthenticationContext} from "../../../../provider/authentication-provider";
import {ThemeContext} from "../../../../provider/theme-provider";
import {MyCoursesContext} from "../../../../provider/mycourses-provider";
import PaymentApi from "../../../../api/paymentApi";
import CourseApi from "../../../../api/courseApi";
import UserApi from "../../../../api/userApi";
import PaymentCoursesItem from "./payment-courses-item";


const PaymentCourses=(props)=>{
    const {authentication}=useContext(AuthenticationContext);
    
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
            
          
            
            return <PaymentCoursesItem navigation={props.navigation} item={item} key={i} 
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
            
            { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={{marginTop:60,flex:1}}>
                    <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                    {renderItem()}
            </View>
        </ScrollView>

    );

}


export default PaymentCourses;