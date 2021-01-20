import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import {navigationName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {LanguageContext} from "../../../provider/language-provider";
const Setting=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    const {changeLanguage}=useContext(LanguageContext);
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    console.log(changeTheme);
   
    console.log(props);
    let navigation=props.route.params.navigation;
    const {setAuthentication}=useContext(AuthenticationContext);

    const signOut=(props)=>{
        setAuthentication(null);

        navigation.navigate(navigationName.Login);
        console.log("Sign out");
    }
    const account=(props)=>{
        navigation.navigate(navigationName.Account,{
            navigation:navigation,
        });
        console.log('account');
    }
    
    
    const theme=(props)=>{
        navigation.navigate(navigationName.Theme,{
            navigation:navigation,
        });
        console.log('theme');
    }
    const language=(props)=>{
        navigation.navigate(navigationName.Language,{
            navigation:navigation,
        });
        console.log('theme');
    }
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
          <View style={{marginLeft:10,marginRight:10}}>
                <TouchableOpacity
                    style={{borderBottomColor: 'gray',
                                borderBottomWidth: 1,}}
                    onPress={account}
                >
                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text style={themeStyle.textMedium}>{changeLanguage.Account}</Text>
                    </View>
                </TouchableOpacity>

              
              
                <TouchableOpacity
                    style={{borderBottomColor: 'gray',
                        borderBottomWidth: 1,}}
                    onPress={theme}
                >
                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text style={themeStyle.textMedium}>{changeLanguage.Theme}</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={language}
                >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>{changeLanguage.Language}</Text>

                  </View>
                </TouchableOpacity>
              
              
              


                <TouchableHighlight style={{marginTop:40}} onPress={signOut} >
                    <View style={themeStyle.buttonLight}>
                        <Text style={themeStyle.text}>{changeLanguage.SignOut}</Text>
                    </View>
                </TouchableHighlight>


          </View>
        </ScrollView>
    );
}

export default Setting;