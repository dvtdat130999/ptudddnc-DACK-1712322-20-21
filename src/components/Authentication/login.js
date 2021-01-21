import React, {Component, useContext, useEffect, useState} from 'react';
import { StyleSheet,View, Image, TextInput,TouchableHighlight,Dimensions,ScrollView,SafeAreaView,Text,Alert  } from 'react-native';

import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import {LanguageContext} from "../../provider/language-provider";

import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {themes} from "../../globals/themes";
import {navigationName} from "../../globals/constants";
import {UserContext} from "../../provider/users-provider";
import {AuthenticationContext, AuthenticationProvider} from "../../provider/authentication-provider";
import UserApi from "../../api/userApi"
const Login=(props)=>{
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
    const [password,setPassword]=useState("");

    const [status,setStatus]=useState(null);
    const [isSuccess,setIsSuccess]=useState(false);
    const [message,setMessage]=useState("");
    useEffect(()=>{
       /* if(status && status.status===200)
        {
            console.log("Check status");
            console.log(status);
            setIsSuccess(true);
        }*/

    })
    const renderStatus=(status)=>{
        if(!status)
        {
            return <View/>
        }
        else if(status.status===200)
            {
                return <Text style={themeStyle.text}>{changeLanguage.LoginSuccess}</Text>
            }
        else {
            return <Text style={themeStyle.text}>{status.errorString}</Text>

        }

    }

    const onPressForgetPassword=()=>{
        props.navigation.navigate(navigationName.ForgetPassword);

    }
    const {setAuthentication}=useContext(AuthenticationContext);

    const {userList,setUserList}=useContext(UserContext);
    const validateUser=(message)=>{
        
        if(message==="OK")
        {
            setMessage(changeLanguage.LoginSuccess);
            return true;
           
        }
        else
        {
            
            //save message to render
            setMessage(changeLanguage.LoginFailed);
            return false;
        }
    }

    const renderMessage=()=>{
        if(!message){
            return <View/>
        }
        else if(message===changeLanguage.LoginSuccess)
            {
                return <Text style={themeStyle.textSuccess}>{message}</Text>
            }
            else
            {
                return <Text style={themeStyle.textError}>{message}</Text>

            }
    }
    const onPressLogin=async()=>{
        
        const res=await UserApi.login(email,password);
        console.log("Check res");
        console.log(res.message);
        if(res&&res.message)
        {
            if(validateUser(res.message))
            {
                //save token to authentication
                setAuthentication(res.token);
                //navigate to home page
                props.navigation.navigate(navigationName.AfterLogin);
            }
        }
        else{
            setMessage(changeLanguage.LoginFailed);
        }
        
        
    }
    const onPressRegister=()=>{
        props.navigation.navigate(navigationName.Register);
    }
    

    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}} >
                <View style={{flex: 4,marginTop:20}}>

                    <View style={componentStyle.titleView}>
                        <Text style={themeStyle.title} >
                            {changeLanguage.Login}
                        </Text>
                    </View>

                </View>

                <View style={{flex: 10}}>

                    <Text style={themeStyle.textMedium}>{changeLanguage.Email}</Text>

                    <TextInput style={styles.input} onChangeText={text=>{setEmail(text)}} defaultValue={email}></TextInput>

                    <View style={styles.space}/>
                    <Text style={themeStyle.textMedium}>{changeLanguage.Password}</Text>
                    <TextInput secureTextEntry={true} style={styles.input} defaultValue={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                    <View style={styles.space}/>
                    {renderMessage()}
{/*
                    {renderStatus(status)}
*/}
                    <TouchableHighlight onPress={onPressLogin}>
                        <View style={themeStyle.button}>
                            <Text style={themeStyle.textButton}>{changeLanguage.Login}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>
                    <TouchableHighlight onPress={onPressForgetPassword}>
                        <View style={themeStyle.buttonLight}>
                            <Text style={themeStyle.textLightButton}>{changeLanguage.ForgetPassword}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>

                    <TouchableHighlight onPress={onPressRegister}>
                        <View style={themeStyle.buttonLight}>
                            <Text  style={themeStyle.textLightButton}>{changeLanguage.Register}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>
                    



                </View>
        </ScrollView>

    );
};
const componentStyle=StyleSheet.create({
    scrollView:{
        marginLeft:10,
        marginRight:10
    },
    titleView:{
        justifyContent:'center',
        alignItems:'center'
    },



});
export default Login;