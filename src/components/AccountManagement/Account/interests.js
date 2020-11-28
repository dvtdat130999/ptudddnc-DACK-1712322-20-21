import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles"

const Interests=(props)=>{
    return(
        <View style={styles.sectionSkillsItem}>
            <Text style={styles.sectionCourseItemText}>{props.name}</Text>


        </View>
    );
}

export default Interests;