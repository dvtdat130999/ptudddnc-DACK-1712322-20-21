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
    //     const courseDetailWithLesson=async()=>{
    //         const res=await CourseApi.courseDetail("5b69ea4b-ef3c-4ab5-b9fb-2ec50c03f849","3d3a9568-f032-492b-9ada-4d50b74e90db")
    //         console.log("Check res payload section get detail");
    //         console.log(res.payload.section[0]);
    //     }
    //     courseDetailWithLesson();
    // })
    //test api
    // useEffect(()=>{
    //     const fetchInstructor=async()=>{
    //     try{
    //         const data={
    //             limit:3,
    //             page:1
    //         };
    //         const userRegister={
    //             username:"dat",
    //             email:"datvisualnovel3@gmail.com",
    //             phone:"01293872392739273821",
    //             password:"testbaihoc123"
    //         };
    //         const userLogin={
    //             email:"datvisualnovel1@gmail.com",
    //             password:"testbaihoc123",
    //         }
    //         const email="datvisualnovel1@gmail.com";
    //         const userIdDatvisualnovel2="e4a2fada-44c7-4f89-ad84-c472fb661aad";
    //         const oldPass="testbaihoc1234";
    //         const newPass="testbaihoc123"
    //         const userTokenDatvisualnovel2="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0YTJmYWRhLTQ0YzctNGY4OS1hZDg0LWM0NzJmYjY2MWFhZCIsImlhdCI6MTYwODI3NDQ2OCwiZXhwIjoxNjA4MjgxNjY4fQ.tqlgF2Uj7Z8mF60zxO6CA2iOOQ9Zm0jQ4NxzunqrcqU.eyJpZCI6IjdkMjlmMThkLThlNDEtNGVkMS04MGMyLWU1NDA0YWNhNmJkZiIsImlhdCI6MTYwODI2MDI0OSwiZXhwIjoxNjA4MjY3NDQ5fQ.lpi4X7an2__GuFpBsCf2ciM3KkCYts22m8tER6GFpig"
    //         //const res= await UserApi.changePassword(userIdDatvisualnovel2,oldPass,newPass,userTokenDatvisualnovel2);
    //         const res=await CourseApi.searchByCategory('847dce36-f43b-4714-982d-e65812b40b5e');

    //         console.log("Search by category by axios 2");

    //         console.log("===============================================");
    //         console.log(res);

    //     }catch(err){
    //         console.log("Failed to fetch:"+err);
    //     }


    //     }
    //     console.log("Do function fetchInstructor by axios");
    //     fetchInstructor();
    // });
    
           
   
   
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
        <View style={{flex:1}}>
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