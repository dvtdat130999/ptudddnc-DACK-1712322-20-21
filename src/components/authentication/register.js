import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../styles";

const Register=()=>{
    return(
        <View style={styles.container}>
            <View style={{flex: 2}}>

                <View style={{alignItems:'center',justifyContent: "center"}}>
                    <Text style={{fontSize:20,fontWeight: "bold",color:'azure'}} >
                        Register
                    </Text>
                </View>


            </View>
            <View style={{flex: 18, backgroundColor: ''}}>
                <Text style={styles.label}>Username</Text>

                <TextInput style={styles.inputLogin} defaultValue=""></TextInput>

                <View style={styles.space}/>
                <Text style={styles.label}>Email</Text>

                <TextInput style={styles.inputLogin} defaultValue=""></TextInput>

                <View style={styles.space}/>
                <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.inputLogin} defaultValue=""></TextInput>
                <View style={styles.space}/>
                <Text style={styles.label}>Phone</Text>

                <TextInput style={styles.inputLogin} defaultValue=""></TextInput>

                <View style={styles.space}/>

                <TouchableHighlight >

                    <View style={styles.button}>
                        <Text style={styles.textButton}>Register</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.space}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'dodgerblue'}}>
                        Login
                    </Text>
                </View>
                <View style={styles.space}/>


            </View>
        </View>
    );
};

export default Register;