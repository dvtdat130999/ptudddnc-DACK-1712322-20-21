import React, {useContext,useEffect,useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
import Logo from "../../../assets/logo-pluralsight.png"
import styles from "../../globals/styles";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {navigationName} from "../../globals/constants";
import {ThemeContext} from "../../provider/theme-provider";
import {themes} from "../../globals/themes";
import InstructorApi from "../../api/instructorApi";
import CourseApi from "../../api/courseApi";
import CategoryApi from "../../api/categoryApi";
import UserApi from "../../api/userApi";
import axios from "axios";
import {AuthenticationContext} from "../../provider/authentication-provider";
import {CoursesContext} from "../../provider/courses-provider";

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
const First=(props)=>{
    const {listCourses}=useContext(CoursesContext);
    const [user,setUser]=useState(null);
    const [favoriteCategories,setFavoritesCategories]=useState([]);
    const [downloadList,setDownloadList]=useState([]);
    const {authentication}=useContext(AuthenticationContext);
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

    const onPressLogin=()=>{
        props.navigation.navigate(navigationName.Login);
    }
    const onPressRegister=()=>{
        props.navigation.navigate(navigationName.Register);
    }
   
    
    // useEffect(()=>{
    //     if(downloadList.length!==0)
    //     {
    //         console.log("Check length download list:",downloadList.length);
    //         console.log("Check download list:",downloadList);
    //     }
    //     if(downloadList.length===0)
    //     {
    //         const onCheck=async()=>{
    //             const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //             if(status==='granted')
    //             {
    //                 const res=await MediaLibrary.getAssetsAsync({
    //                     mediaType:MediaLibrary.MediaType.video
    //                   });
    //                   setDownloadList(res.assets);
    //                   console.log("Check res");
    //             }
                
    //         }
    //         onCheck();
    //     }
    // })
   
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
        <View style={{flex:1,marginTop:30}}>
            <View style={componentStyle.logoView}>
                <Image source={Logo} style={componentStyle.logo}/>

            </View>

            <View style={componentStyle.titleView}>
                <Text style={themeStyle.title}>Pluralsight</Text>
            </View>
            <TouchableHighlight onPress={onPressLogin}>
                <View style={themeStyle.button}>
                    <Text style={themeStyle.textButton}>Login</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />

            <TouchableHighlight onPress={onPressRegister}>
                <View style={themeStyle.button}>
                    <Text style={themeStyle.textButton}>Register</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />
            
        </View>
        </ScrollView>
    );
};

const componentStyle=StyleSheet.create({
   logoView:{
       justifyContent:'center',
       alignItems:'center'
   },
    logo:{
        width:50,
        height:50,
    },
    titleView:{
       alignItems:'center',
        padding:40
   },


});
export default First;