import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../styles";
const First=()=>{

    return(
        <View style={styles.container}>
{/*
            <Image source={require('./logo-pluralsight.png')} style={styles.logo}/>
*/}
            <View style={{alignItems:'center',padding:40}}>
                <Text style={{fontSize:30}}>Pluralsight</Text>
            </View>
            <TouchableHighlight >
                <View style={styles.button}>
                    <Text>Login</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />

            <TouchableHighlight >
                <View style={styles.button}>
                    <Text>Register</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />
            <TouchableHighlight >
                <View style={styles.buttonLight}>
                    <Text>Subscribe to Pluralsight</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />
            <TouchableHighlight >
                <View style={styles.buttonLight}>
                    <Text>Explore without a subscription</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default First;