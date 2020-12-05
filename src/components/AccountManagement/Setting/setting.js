import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles";
import {navigationName} from "../../../globals/constants";
import {ThemeContext} from "../../../../App";

const Setting=(props)=>{
    console.log(props);
    let navigation=props.route.params.navigation;
    const signOut=(props)=>{
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
      <View style={{marginLeft:10,marginRight:10}}>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                        borderBottomWidth: 1,}}
              onPress={account}
          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Account</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={subcription}
          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Subcription</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={communication}
          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Communication Preferences</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={theme}
          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Theme</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={requireWiFiStreaming}

          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Require Wi-Fi for streaming</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={requireWiFiDownload}

          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Require Wi-Fi for downloading</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={sendFeedback}

          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Send Feedback</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
              style={{borderBottomColor: 'gray',
                  borderBottomWidth: 1,}}
              onPress={support}

          >
              <View>
                  <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Contact Support</Text>
              </View>
          </TouchableOpacity>
          <View>
              <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>App Version</Text>
          </View>

          <TouchableHighlight style={{marginTop:40}} onPress={signOut} >
              <View style={styles.buttonLight}>
                  <Text style={{fontSize:20,fontWeight: "bold",color:'dodgerblue'}}>Sign Out</Text>
              </View>
          </TouchableHighlight>


      </View>
    );
}

export default Setting;