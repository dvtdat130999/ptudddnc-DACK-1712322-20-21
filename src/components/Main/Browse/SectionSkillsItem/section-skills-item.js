import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions,ImageBackground  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../../../../globals/styles";
const SectionSkillsItem=(props)=>{
    return (
        <TouchableHighlight>
            <View style={styles.sectionSkillsItem}>
                <Text style={styles.sectionCourseItemText}>{props.name}</Text>


            </View>

        </TouchableHighlight>

    );
}

export default SectionSkillsItem;