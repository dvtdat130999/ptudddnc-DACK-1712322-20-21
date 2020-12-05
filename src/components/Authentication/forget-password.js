import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../../globals/styles";

const ForgetPassword=()=>{
    return(
        <View style={styles.container}>
            <View style={{flex: 2}}>

                <View style={{alignItems:'center',justifyContent: "center"}}>
                    <Text style={{fontSize:20,color:'white'}} >
                        Forget Password
                    </Text>
                </View>


            </View>
            <View style={{flex: 10, backgroundColor: ''}}>
                <Text>Email</Text>

                <TextInput style={styles.inputLogin} defaultValue=""></TextInput>

                <View style={styles.space}/>

                <TouchableHighlight >

                    <View style={styles.button}>
                        <Text>Send new password</Text>
                    </View>
                </TouchableHighlight>




            </View>
        </View>
    );
};

export default ForgetPassword;