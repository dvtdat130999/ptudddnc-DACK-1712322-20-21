import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
import Logo from "../../../assets/logo-pluralsight.png"
import styles from "../../globals/styles";
import {navigationName} from "../../globals/constants";
const First=(props)=>{
    const onPressLogin=()=>{
        props.navigation.navigate(navigationName.Login);
    }
    const onPressRegister=()=>{
        props.navigation.navigate(navigationName.Register);
    }

    return(
        <View >
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Logo} style={styles.logo}/>

            </View>

            <View style={{alignItems:'center',padding:40}}>
                <Text style={{fontSize:30,fontWeight: "bold",color:'azure'}}>Pluralsight</Text>
            </View>
            <TouchableHighlight onPress={onPressLogin}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />

            <TouchableHighlight onPress={onPressRegister}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Register</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />
            <TouchableHighlight >
                <View style={styles.buttonLight}>
                    <Text style={styles.textButton}>Subscribe to Pluralsight</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />
            <TouchableHighlight >
                <View style={styles.buttonLight}>
                    <Text style={styles.textButton}>Explore without a subscription</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default First;