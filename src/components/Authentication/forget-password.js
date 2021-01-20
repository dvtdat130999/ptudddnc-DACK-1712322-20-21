import React, {Component,useState, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import {LanguageContext} from "../../provider/language-provider";

import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {themes} from "../../globals/themes";
import {navigationName} from "../../globals/constants";

import UserApi from "../../api/userApi";
const ForgetPassword=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    const {changeLanguage}=useContext(LanguageContext);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState(null);
    const onPressLogin=()=>{
        console.log("Click login in forget");
        props.navigation.navigate(navigationName.Login)
    }
    const sendMail=async()=>{
        
        const res=await UserApi.forgetPassword(email);
        console.log("Check res forget pass");
        console.log(res);
        if(res.message!==null && res.message==="Email đã được gửi đi")
        {
            setMessage("Check your email to receive new password");
        }
        else
        {
            setMessage("Email was not registered");
        }
    }
    return(
        <View style={{backgroundColor:changeTheme.background,marginTop:20,flex:1}}>
            <View style={{flex: 2}}>

                <View style={componentStyle.titleView}>
                    <Text style={themeStyle.title} >
                        {changeLanguage.ForgetPassword}
                    </Text>
                </View>


            </View>
            <View style={{flex: 10}}>
                <Text style={themeStyle.textMedium}>{changeLanguage.Email}</Text>

                <TextInput style={styles.input} defaultValue="" onChangeText={text=>{setEmail(text)}}></TextInput>

                <View style={styles.space}/>
                {message==="Email was not registered"
                ?
                <Text style={themeStyle.textError}>{message}</Text>
                :
                <View></View>
                }
                {message==="Check your email to receive new password"
                ?
                <Text style={themeStyle.textSuccess}>{message}</Text>
                :
                <View></View>
                }
                <TouchableHighlight onPress={sendMail} >

                    <View style={themeStyle.button}>
                        <Text style={themeStyle.textButton}>{changeLanguage.SendNewPassword}</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.space}/>

                <TouchableHighlight onPress={onPressLogin}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'dodgerblue'}}>
                            {changeLanguage.Login}
                        </Text>
                    </View>
                </TouchableHighlight>




            </View>
        </View>
    );
};
const componentStyle=StyleSheet.create({
    titleView:{
        justifyContent:'center',
        alignItems:'center'
    },



});
export default ForgetPassword;