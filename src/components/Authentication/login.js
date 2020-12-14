import React, {Component, useContext, useEffect, useState} from 'react';
import { StyleSheet,View, Image, TextInput,TouchableHighlight,Dimensions,ScrollView,SafeAreaView,Text,Alert  } from 'react-native';

import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {themes} from "../../globals/themes";
import {navigationName} from "../../globals/constants";
import {login} from "../core/services/authentication-services";
import {UserContext} from "../../provider/users-provider";
import {AuthenticationContext, AuthenticationProvider} from "../../provider/authentication-provider";

const Login=(props)=>{
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
    const [username,setUsername]=useState("");
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
                return <Text style={themeStyle.text}>Login success</Text>
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
    const validateUser=(user,pass)=>{
        if(username===user)
        {
            if(password===pass)
            {
                setMessage("Login is success");
                return true;
            }
            else
            {
                setMessage("Password is not correct");
                return false;
            }
        }
        setMessage("Username is not existed");

        return false;
    }
    const renderMessage=()=>{
        if(!message){
            return <View/>
        }
        else
        {
            return <Text style={themeStyle.textError}>{message}</Text>
        }
    }
    const onPressLogin=()=>{
        //setStatus(login(username,password));
        //setTimeout(()=>{console.log("Check is success");},100);
        //console.log(isSuccess);
        userList.map((item,i)=>{
            if(validateUser(item.username,item.password))
            {
                setAuthentication(item);
                props.navigation.navigate(navigationName.AfterLogin)

            }
        })

        //props.navigation.navigate(navigationName.AfterLogin);
    }
    const onPressRegister=()=>{
        props.navigation.navigate(navigationName.Register);
    }
    return(
        <ScrollView style={{...componentStyle.scrollView,...styles.container,backgroundColor:changeTheme.background}} >
            <View >
                <View style={{flex: 2}}>

                    <View style={componentStyle.titleView}>
                        <Text style={themeStyle.title} >
                            Login
                        </Text>
                    </View>

                </View>

                <View style={{flex: 10}}>

                    <Text style={themeStyle.textMedium}>Email or username</Text>

                    <TextInput style={styles.input} onChangeText={text=>{setUsername(text)}} defaultValue={username}></TextInput>

                    <View style={styles.space}/>
                    <Text style={themeStyle.textMedium}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input} defaultValue={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                    <View style={styles.space}/>
                    {renderMessage()}
{/*
                    {renderStatus(status)}
*/}
                    <TouchableHighlight onPress={onPressLogin}>
                        <View style={themeStyle.button}>
                            <Text style={themeStyle.textButton}> Login</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>
                    <TouchableHighlight onPress={onPressForgetPassword}>
                        <View style={themeStyle.buttonLight}>
                            <Text style={themeStyle.textLightButton}>Forget password</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>

                    <TouchableHighlight onPress={onPressRegister}>
                        <View style={themeStyle.buttonLight}>
                            <Text  style={themeStyle.textLightButton}>Register</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>
                    <TouchableHighlight >
                        <View style={themeStyle.buttonLight}>
                            <Text  style={themeStyle.textLightButton}>Need help?</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.space}/>

                    <TouchableHighlight >
                        <View style={themeStyle.buttonLight}>
                            <Text style={themeStyle.textLightButton}>Use Single Sign-On(SSO)</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>



                </View>
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