import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../styles";

const HomeHeader=(props)=>{
    return(
        <View style={styles.homeBackground}>
            <Text style={styles.homeContent}>{props.browserName}</Text>

        </View>
    );
}

export default HomeHeader;