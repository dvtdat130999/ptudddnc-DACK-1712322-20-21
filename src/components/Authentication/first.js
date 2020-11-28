import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
import Logo from "../../../assets/logo-pluralsight.png"
import styles from "../styles";
const First=()=>{

    return(
        <View style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={Logo} style={styles.logo}/>

            </View>

            <View style={{alignItems:'center',padding:40}}>
                <Text style={{fontSize:30,fontWeight: "bold",color:'azure'}}>Pluralsight</Text>
            </View>
            <TouchableHighlight >
                <View style={styles.button}>
                    <Text style={styles.textButton}>Login</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.space} />

            <TouchableHighlight >
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