import React, {Component, useContext,useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
const ListCommentItem=(props)=>{
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
    const [username,setUsername]=useState(props.item.user.name);
    const [avatarUrl,setAvatarUrl]=useState(props.item.user.avatar);
    const [comment,setComment]=useState(props.item.content);
    return(
        <View style={{backgroundColor:changeTheme.background,
                        flexDirection:'row',
                        marginTop:20
                    }}
        >
            <Image source={{uri:avatarUrl}} style={{width:70,height:70,borderRadius:70/2}}/>
            <View style={{marginLeft:10,flexDirection:'column',backgroundColor:'gray',borderRadius:30,width:300}}>
                <View style={{padding:10}}>
                    <Text style={themeStyle.textBold}>{username}</Text>

                </View>
                <View style={{paddingLeft:10,paddingBottom:10}}>
                    <Text style={themeStyle.text}>{comment}</Text>

                </View>

            </View>
        </View>
    )
};

export default ListCommentItem;