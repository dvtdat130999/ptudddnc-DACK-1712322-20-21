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
const Register=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");
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
            setMessage("Register is success");
            return true;
        }
        else 
        {
            setMessage("Email or phone is existed");

        }
        return false;

    }
    const onPressRegister= async () => {
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
            setMessage("Email or phone is existed");

        }
        
        /*let users=userList;
        users=users.concat(user);
        setUserList(users);
        props.navigation.navigate(navigationName.Login)*/
    };
    const onPressLogin=()=>{
        props.navigation.navigate(navigationName.Login)
    };
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
            <View style={{flex: 2,marginTop:20}}>

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
                <Text style={themeStyle.textMedium}>Email</Text>

                <TextInput style={styles.input} defaultValue={email} onChangeText={text=>{setEmail(text)}}></TextInput>

                <View style={styles.space}/>
                <Text style={themeStyle.textMedium}>Phone</Text>

                <TextInput style={styles.input} defaultValue={phone} onChangeText={text=>{setPhone(text)}}></TextInput>

                <View style={styles.space}/>
                <View style={styles.space}/>
                {renderMessage()}

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