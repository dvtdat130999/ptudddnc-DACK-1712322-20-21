import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';

import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import {themes} from "../../globals/themes";
import {navigationName} from "../../globals/constants";
const ForgetPassword=(props)=>{
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
    const onPressLogin=()=>{
        props.navigation.navigate(navigationName.Login)
    }
    return(
        <View style={{backgroundColor:changeTheme.background,marginTop:20,flex:1}}>
            <View style={{flex: 2}}>

                <View style={componentStyle.titleView}>
                    <Text style={themeStyle.title} >
                        Forget Password
                    </Text>
                </View>


            </View>
            <View style={{flex: 10}}>
                <Text style={themeStyle.textMedium}>Email</Text>

                <TextInput style={styles.input} defaultValue=""></TextInput>

                <View style={styles.space}/>

                <TouchableHighlight >

                    <View style={themeStyle.button}>
                        <Text style={themeStyle.textButton}>Send new password</Text>
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
        </View>
    );
};
const componentStyle=StyleSheet.create({
    titleView:{
        justifyContent:'center',
        alignItems:'center'
    },



});
export default ForgetPassword;