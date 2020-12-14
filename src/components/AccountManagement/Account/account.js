import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles"
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import UserImage from "../../../../assets/user.jpg"
import SectionSkillsItem from "../../Main/Browse/SectionSkillsItem/section-skills-item";
import {AuthenticationContext} from "../../../provider/authentication-provider";

const Account=(props)=>{
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
    console.log(props);
    let navigation=props.route.params.navigation;
    const interested=[
        {
            name:'MongoDB',
        },
        {
            name:'Java',
        },
        {
            name:'React',
        },
        {
            name:'C++',
        },
        {
            name:'Communication',
        }

    ]
    const renderItem=()=>{
        return interested.map((item,i)=>{
            return <SectionSkillsItem item={item} key={i} navigation={navigation}/>
        })
    }
    const {authentication,setAuthentication}=useContext(AuthenticationContext);

    return(
        <ScrollView styles={{marginLeft:10,marginTop:10}}>
            <View style={{backgroundColor:changeTheme.background}}>

                <View styles={{justifyContent:'center',alignItems:'center',flexDirection:'column',flex:1}}>
                    <Image source={UserImage} style={{height:200,width:200}}/>
                    <Text style={themeStyle.text}>{authentication.fullname}</Text>
                </View>
                <View style={styles.space}/>
                <View>
                    <Text style={themeStyle.textMedium}>Interested</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={styles.skillBrowse}>{props.title}</Text>
                    <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                        {renderItem()}
                    </ScrollView>
                </View>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>Activity insights(last 30 days)</Text>
                <Text style={themeStyle.textMedium}>TOTAL ACTIVE DAYS</Text>
                <Text >
                    <Text style={themeStyle.textMedium}>4</Text>
                    <Text style={themeStyle.text}>  1 day streak</Text>

                </Text>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>MOST ACTIVE OF DAY</Text>
                <Text style={themeStyle.textMedium}>21:00</Text>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>MOST VIEWED SUBJECT</Text>
                <Text style={themeStyle.textMedium}>Managerial Skills</Text>
            </View>
        </ScrollView>
    );
   /* return(
        <AuthenticationContext.Consumer>
            {
                ({authentication})=>{
                    console.log("Check authentication in account");
                    console.log(authentication);
                    return(
                        <ScrollView styles={{marginLeft:10,marginTop:10}}>
                            <View styles={{justifyContent:'center',alignItems:'center',flexDirection:'column',flex:1}}>
                                <Image source={UserImage} style={{height:200,width:200}}/>
                                <Text style={{color:'white'}}>{authentication.user.fullname}</Text>
                            </View>
                            <View style={styles.space}/>
                            <View>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Interested</Text>
                            </View>
                            <View style={{marginTop:20}}>
                                <Text style={styles.skillBrowse}>{props.title}</Text>
                                <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                                    {renderItem()}
                                </ScrollView>
                            </View>
                            <View style={styles.space}/>

                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Activity insights(last 30 days)</Text>
                            <Text style={{color:'white',fontSize:20}}>TOTAL ACTIVE DAYS</Text>
                            <Text >
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>4</Text>
                                <Text style={{color:'white'}}>  1 day streak</Text>

                            </Text>
                            <View style={styles.space}/>

                            <Text style={{color:'white',fontSize:20}}>MOST ACTIVE OF DAY</Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>21:00</Text>
                            <View style={styles.space}/>

                            <Text style={{color:'white',fontSize:20}}>MOST VIEWED SUBJECT</Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Managerial Skills</Text>

                        </ScrollView>
                    );
                }
            }
        </AuthenticationContext.Consumer>
    );*/

}

export default Account;