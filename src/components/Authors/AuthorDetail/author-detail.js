import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button } from 'react-native';

import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import AuthorDetailInfo from "../../Common/author-detail-info";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
const AuthorDetail=(props)=>{
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
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <AuthorDetailInfo item={props.route.params.instructor} />
            </View>
        </ScrollView>
    )
}


export default AuthorDetail;
