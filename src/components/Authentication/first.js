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
const First=(props)=>{
    const {listCourses}=useContext(CoursesContext);
    const [user,setUser]=useState(null);
    const [favoriteCategories,setFavoritesCategories]=useState([]);
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
            <TouchableHighlight >
                <View style={themeStyle.buttonLight}>
                    <Text style={themeStyle.textLightButton}>Subscribe to Pluralsight</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />
            <TouchableHighlight >
                <View style={themeStyle.buttonLight}>
                    <Text style={themeStyle.textLightButton}>Explore without a subscription</Text>
                </View>
            </TouchableHighlight>
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