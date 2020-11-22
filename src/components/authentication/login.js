import React, { Component,useState } from 'react';
import { StyleSheet,View, Image, TextInput,TouchableHighlight,Dimensions,ScrollView,SafeAreaView,Text  } from 'react-native';

import styles from "../styles";

const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return(
        <View >
            <ScrollView>
            <View style={{flex: 2}}>

                <View style={{alignItems:'center',justifyContent: "center"}}>
                    <Text style={{fontSize:30,fontWeight: "bold",color:'azure'}} >
                        Login
                    </Text>
                </View>

            </View>

            <View style={{flex: 10}}>

                <Text style={styles.label}>Email or username</Text>

                <TextInput style={styles.inputLogin} onChangeText={username=>{setUsername(username)}} defaultValue={username}></TextInput>

                <View style={styles.space}/>
                <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.inputLogin} defaultValue={password} onChangeText={password=>{setPassword(password)}}></TextInput>
                <View style={styles.space}/>
                <TouchableHighlight >
                    <View style={styles.button}>
                        <Text style={styles.textButton}> Login</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.space}/>
                <TouchableHighlight >
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
            </ScrollView>
        </View>


    );
};

export default Login;