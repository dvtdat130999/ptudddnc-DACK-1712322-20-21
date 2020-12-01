import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground,TouchableOpacity  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../../globals/styles";
import {navigationName} from "../../../../globals/constants";
const SectionSkillsItem=(props)=>{
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses);

    }
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.sectionSkillsItem}>
                <Text style={styles.sectionCourseItemText}>{props.item.name}</Text>


            </View>

        </TouchableHighlight>

    );
}

export default SectionSkillsItem;