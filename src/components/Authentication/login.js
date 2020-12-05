import React, {Component, useContext, useEffect, useState} from 'react';
import { StyleSheet,View, Image, TextInput,TouchableHighlight,Dimensions,ScrollView,SafeAreaView,Text,Alert  } from 'react-native';

import styles from "../../globals/styles";
import {navigationName} from "../../globals/constants";
import {login} from "../core/services/authentication-services";
import {AuthenticationContext, AuthenticationProvider} from "../../provider/authentication-provider";

const Login=(props)=>{
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
                return <Text style={{color:'white'}}>Login success</Text>
            }
        else {
            return <Text style={{color:'white'}}>{status.errorString}</Text>

        }

    }

    const onPressForgetPassword=()=>{
        props.navigation.navigate(navigationName.ForgetPassword);

    }
    const {setAuthentication}=useContext(AuthenticationContext);
    const validateUser=(username,password)=>{
        if(username==='admin')
        {
            if(password==='admin')
            {
                setMessage("Login is success");
                return true;
            }
            else
            {
                setMessage("Password is not correct");
                console.log(message);
                return false;
            }
        }
        setMessage("Username is not existed");
        console.log(message);

        return false;
    }
    const renderMessage=()=>{
        if(!message){
            return <View/>
        }
        else
        {
            return <Text style={{color:'white'}}>{message}</Text>
        }
    }
    const onPressLogin=()=>{
        //setStatus(login(username,password));
        //setTimeout(()=>{console.log("Check is success");},100);
        //console.log(isSuccess);
        if(validateUser(username,password))
        {
            setAuthentication(login(username,password));
            props.navigation.navigate(navigationName.AfterLogin)

        }




        //props.navigation.navigate(navigationName.AfterLogin);
    }
    return(
        <ScrollView style={{marginLeft:10,marginRight:10}} >
            <View >
                <View style={{flex: 2}}>

                    <View style={{alignItems:'center',justifyContent: "center"}}>
                        <Text style={{fontSize:30,fontWeight: "bold",color:'azure'}} >
                            Login
                        </Text>
                    </View>

                </View>

                <View style={{flex: 10}}>

                    <Text style={styles.label}>Email or username</Text>

                    <TextInput style={styles.inputLogin} onChangeText={text=>{setUsername(text)}} defaultValue={username}></TextInput>

                    <View style={styles.space}/>
                    <Text style={styles.label}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.inputLogin} defaultValue={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                    <View style={styles.space}/>
                    {renderMessage()}
{/*
                    {renderStatus(status)}
*/}
                    <TouchableHighlight onPress={onPressLogin}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}> Login</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>
                    <TouchableHighlight onPress={onPressForgetPassword}>
                        <View style={styles.buttonLight}>
                            <Text style={styles.textButton}>Forget password</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>
                    <TouchableHighlight >
                        <View style={styles.buttonLight}>
                            <Text  style={styles.textButton}>Need help?</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>

                    <TouchableHighlight >
                        <View style={styles.buttonLight}>
                            <Text style={styles.textButton}>Use Single Sign-On(SSO)</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.space}/>

                    <TouchableHighlight >
                        <View style={styles.buttonLight}>
                            <Text  style={styles.textButton}>Subscribe to Pluralsight</Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        </ScrollView>


    );
/*
    return <AuthenticationContext.Consumer>
        {
            ({setAuthentication})=>{
                const onPressLogin=()=>{
                    setStatus(login(username,password));
                    setAuthentication(login(username,password));
                    //props.navigation.navigate(navigationName.AfterLogin);
                }
                return(
                    <ScrollView style={{marginLeft:10,marginRight:10}} >
                        <View >
                            <View style={{flex: 2}}>

                                <View style={{alignItems:'center',justifyContent: "center"}}>
                                    <Text style={{fontSize:30,fontWeight: "bold",color:'azure'}} >
                                        Login
                                    </Text>
                                </View>

                            </View>

                            <View style={{flex: 10}}>

                                <Text style={styles.label}>Email or username</Text>

                                <TextInput style={styles.inputLogin} onChangeText={text=>{setUsername(text)}} defaultValue={username}></TextInput>

                                <View style={styles.space}/>
                                <Text style={styles.label}>Password</Text>
                                <TextInput secureTextEntry={true} style={styles.inputLogin} defaultValue={password} onChangeText={text=>{setPassword(text)}}></TextInput>
                                <View style={styles.space}/>
                                {renderStatus(status)}
                                <TouchableHighlight onPress={onPressLogin}>
                                    <View style={styles.button}>
                                        <Text style={styles.textButton}> Login</Text>
                                    </View>
                                </TouchableHighlight>
                                <View style={styles.space}/>
                                <TouchableHighlight onPress={onPressForgetPassword}>
                                    <View style={styles.buttonLight}>
                                        <Text style={styles.textButton}>Forget password</Text>
                                    </View>
                                </TouchableHighlight>
                                <View style={styles.space}/>
                                <TouchableHighlight >
                                    <View style={styles.buttonLight}>
                                        <Text  style={styles.textButton}>Need help?</Text>
                                    </View>
                                </TouchableHighlight>
                                <View style={styles.space}/>

                                <TouchableHighlight >
                                    <View style={styles.buttonLight}>
                                        <Text style={styles.textButton}>Use Single Sign-On(SSO)</Text>
                                    </View>
                                </TouchableHighlight>
                                <View style={styles.space}/>

                                <TouchableHighlight >
                                    <View style={styles.buttonLight}>
                                        <Text  style={styles.textButton}>Subscribe to Pluralsight</Text>
                                    </View>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </ScrollView>


                );
            }
        }
    </AuthenticationContext.Consumer>
*/

};

export default Login;