import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button } from 'react-native';

import ImageButton from "../../Common/image-button";

import SectionCourses from "./SectionCourses/section-courses";
import {navigationName} from "../../../globals/constants";
const Home=(props)=>{
    const onPressSetting=()=>{
        props.navigation.navigate(navigationName.Setting,{
            navigation:props.navigation,
        });
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableHighlight onPress={onPressSetting}>
                    <View>
                        <Text styles={{color:'white'}}>Setting</Text>
                    </View>
                </TouchableHighlight>
            ),
        });
    }, [props.navigation]);
    return(
        <ScrollView>
            <SectionCourses navigation={props.navigation} title="New"/>
            <SectionCourses navigation={props.navigation} title="Trending"/>

        </ScrollView>


    );
}

export default Home;