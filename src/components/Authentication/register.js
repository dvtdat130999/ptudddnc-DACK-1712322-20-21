import React, {Component, useContext,useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {navigationName} from "../../globals/constants";
import {themes} from "../../globals/themes";
import {UserContext} from "../../provider/users-provider";
import UserApi from "../../api/userApi";
import {LanguageContext} from "../../provider/language-provider";

const Register=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    const {changeLanguage}=useContext(LanguageContext);

    const [username,setUsername]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [phone,setPhone]=useState(null);
    const [rePassword,setRePassword]=useState(null);
    const [message,setMessage]=useState(null);
    const renderMessage=(message)=>{
        if(!message){
            return <View/>
        }
        else if(message==="Register is success")
            {
                
                return <Text style={themeStyle.textSuccess}>{message}</Text>
            }
            else 
            {
                console.log("Vao duoc day roi ne");
                return <Text style={themeStyle.textError}>{message}</Text>

            }    
                
    }
    const onChangeUsername=(e)=>{
        setUsername(e.target.value);
    };

    const onChangeEmail=(e)=>{
        setEmail(e.target.value);
    };
    const onChangePassword=(e)=>{
        setPassword(e.target.value);
    };
    const onChangePhone=(e)=>{
        setPhone(e.target.value);
    }
    
    let themeStyle;

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const {userList,setUserList}=useContext(UserContext);
    const validateRegister=(message)=>{
        console.log("Dang validate register");
        if(message==="OK")
        {
            setMessage(changeLanguage.RegisterSuccess);
            return true;
        }
        else 
        {
            console.log("Validate dang ky that bai");

            setMessage(changeLanguage.RegisterFailed);

        }
        return false;

    }
    const onPressRegister= async () => {
        if(username===null ||
            password===null ||
            rePassword===null ||
            phone===null ||
            email===null)
            {
                setMessage(changeLanguage.RegisterRequest)
            }
        else
        {
            if(rePassword!==password)
            {
                setMessage(changeLanguage.RegisterFailedRepassword);
            }
            else
            {
                let user = {
                    username: username,
                    phone: phone,
                    email: email,
                    password: password,
        
                };
                const response = await UserApi.register(user);
                console.log(response);
                if(response.message)
                {
                    if(validateRegister(response.message))
                    {
                        props.navigation.navigate(navigationName.Login);
    
                    }
                }
                else
                {
                    console.log("Vao day")
                    setMessage(changeLanguage.RegisterFailed);
    
                }
            }
        }
        
        
        
        
    };
    const onPressLogin=()=>{
        props.navigation.navigate(navigationName.Login)
    };
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
            <View style={{flex: 2,marginTop:20}}>

                <View style={componentStyle.titleView}>
                    <Text style={themeStyle.title} >
                        {changeLanguage.Register}
                    </Text>
                </View>


            </View>
            <View style={{flex: 18, backgroundColor: ''}}>
                <Text style={themeStyle.textMedium}>{changeLanguage.Username}</Text>

                <TextInput style={styles.input} defaultValue={username} onChangeText={text=>{setUsername(text)}}></TextInput>

                <View style={styles.space}/>


                <Text style={themeStyle.textMedium}>{changeLanguage.Password}</Text>
                <TextInput secureTextEntry={true} style={styles.input} defaultValue={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                
                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>{changeLanguage.RetypePassword}</Text>
                <TextInput secureTextEntry={true} style={styles.input} defaultValue={rePassword} onChangeText={text=>{setRePassword(text)}}></TextInput>

                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>{changeLanguage.Email}</Text>

                <TextInput style={styles.input} defaultValue={email} onChangeText={text=>{setEmail(text)}}></TextInput>

                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>{changeLanguage.Phone}</Text>

                <TextInput style={styles.input} keyboardType='numeric' defaultValue={phone} onChangeText={text=>{setPhone(text)}}></TextInput>

                <View style={styles.space}/>
                <View style={styles.space}/>
                {message===changeLanguage.RegisterSuccess
                ?
                <Text style={themeStyle.textSuccess}>{message}</Text>
                : <View></View>
                }
                {message!==changeLanguage.RegisterSuccess
                ?
                <Text style={themeStyle.textError}>{message}</Text>
                : <View></View>
                }
                {renderMessage()}

                <TouchableHighlight onPress={onPressRegister}>

                    <View style={themeStyle.button}>
                        <Text style={themeStyle.textButton}>{changeLanguage.Register}</Text>
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
export default Register;