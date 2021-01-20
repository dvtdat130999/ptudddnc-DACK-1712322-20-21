import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';
import styles from "../../../../globals/styles";
import ListCoursesBookmarkItem from "../ListCoursesBookmarkItem/list-courses-bookmark-item";
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
const ListCoursesBookMark=(props)=>{
    const {authentication}=useContext(AuthenticationContext);
    const [itemToRender,setItemToRender]=useState(10);

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
    const renderItem=()=>{
        
        return DATA.map((item,i)=>{
            if(i<itemToRender)
            {
                console.log("CHeck item in bookmark:",item);
                return <ListCoursesBookmarkItem navigation={props.navigation} item={item} key={i} data={DATA} />

            }
            
            
        })

    };
    
        
    
    useEffect(()=>{
        const getFavoriteCoursesUser=async()=>{
            const res=await UserApi.getFavoriteCourses(authentication);
            
            if(res.payload!==DATA)
            {
                setDATA(res.payload);
                
            }
        }
        getFavoriteCoursesUser();

        
    });

    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}
                    onMomentumScrollEnd={(e)=>{
                        const scrollPosition=e.nativeEvent.contentOffset.y;
                        const scrollViewHeight=e.nativeEvent.layoutMeasurement.height;
                        const contentHeight=e.nativeEvent.contentSize.height;
                        const isScrolledToBottom=scrollViewHeight+scrollPosition;
                        if(isScrolledToBottom>=(contentHeight-50)&& 
                            (itemToRender<=DATA.length ))
                            {
                                setItemToRender(itemToRender+10);
                            }
                    }}
        >

            <View style={{marginTop:60,flex:1}}>
                    <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                    {renderItem()}
            </View>
        </ScrollView>

    );

}


export default ListCoursesBookMark;