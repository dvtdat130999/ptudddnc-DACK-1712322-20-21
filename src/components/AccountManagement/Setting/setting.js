import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import {navigationName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";

const Setting=(props)=>{
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
    console.log(changeTheme);
    const light=(props)=>{

        setChangeTheme(themes.light);
        console.log("Theme light");
    }
    const dark=(props)=>{
        setChangeTheme(themes.dark);

        console.log("Theme dark");
    }
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
    const subcription=(props)=>{
        console.log("Subcription")
    }
    const communication=(props)=>{
        console.log("communication")
    }
    const requireWiFiStreaming=(props)=>{
        console.log("Require wifi for streaming")
    }
    const requireWiFiDownload=(props)=>{
        console.log("Require wifi for downloading")
    }
    const sendFeedback=(props)=>{
        console.log("Send Feedback")
    }
    const support=(props)=>{
        console.log("Support")
    }
    const theme=(props)=>{
        navigation.navigate(navigationName.Theme,{
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
                      <Text style={themeStyle.textMedium}>Account</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={subcription}
              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Subcription</Text>

                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={communication}
              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Communication Preferences</Text>

                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={theme}
              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Theme</Text>

                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={requireWiFiStreaming}

              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Require Wi-Fi for streaming</Text>

                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={requireWiFiDownload}

              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Require Wi-Fi for downloading</Text>

                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={sendFeedback}

              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Send feedback</Text>

                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{borderBottomColor: 'gray',
                      borderBottomWidth: 1,}}
                  onPress={support}

              >
                  <View style={{marginTop:10,marginBottom:10}}>
                      <Text style={themeStyle.textMedium}>Contact support</Text>
                  </View>
              </TouchableOpacity>


              <TouchableHighlight style={{marginTop:40}} onPress={signOut} >
                  <View style={themeStyle.buttonLight}>
                      <Text style={themeStyle.text}>Sign Out</Text>
                  </View>
              </TouchableHighlight>


          </View>
        </ScrollView>
    );
}

export default Setting;