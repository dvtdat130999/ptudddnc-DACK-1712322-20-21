import React, {Component, useContext,useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {navigationName} from "../../globals/constants";
import {themes} from "../../globals/themes";
import {UserContext} from "../../provider/users-provider";

const Register=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    const [username,setUsername]=useState("");
    const [fullname,setFullname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const onChangeUsername=(e)=>{
        setUsername(e.target.value);
    };
    const onChangeFullname=(e)=>{
        setFullname(e.target.value);
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
    const onPressRegister=()=>{
        let user={
            username:username,
            fullname:fullname,
            email:email,
            password:password,

        };
        let users=userList;
        users=users.concat(user);
        setUserList(users);
        props.navigation.navigate(navigationName.Login)
    };
    const onPressLogin=()=>{
        props.navigation.navigate(navigationName.Login)
    };
    return(
        <ScrollView style={{...componentStyle.scrollView,...styles.container,backgroundColor:changeTheme.background}}>
            <View style={{flex: 2}}>

                <View style={componentStyle.titleView}>
                    <Text style={themeStyle.title} >
                        Register
                    </Text>
                </View>


            </View>
            <View style={{flex: 18, backgroundColor: ''}}>
                <Text style={themeStyle.textMedium}>Username</Text>

                <TextInput style={styles.input} defaultValue={username} onChangeText={text=>{setUsername(text)}}></TextInput>

                <View style={styles.space}/>


                <Text style={themeStyle.textMedium}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} defaultValue={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>Full name</Text>

                <TextInput style={styles.input} defaultValue={fullname} onChangeText={text=>{setFullname(text)}}></TextInput>

                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>Email</Text>

                <TextInput style={styles.input} defaultValue={email} onChangeText={text=>{setEmail(text)}}></TextInput>

                <View style={styles.space}/>
                <View style={styles.space}/>

                <TouchableHighlight onPress={onPressRegister}>

                    <View style={themeStyle.button}>
                        <Text style={themeStyle.textButton}>Register</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.space}/>
                <TouchableHighlight onPress={onPressLogin}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'dodgerblue'}}>
                            Login
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