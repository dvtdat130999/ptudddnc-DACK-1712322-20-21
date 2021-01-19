import React, {Component,useState,useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions,ActivityIndicator,TouchableOpacity  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {AuthenticationContext} from "../../../provider/authentication-provider";
import styles from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import {navigationName} from "../../../globals/constants";
import UserApi from "../../../api/userApi";
import axios from "axios";
const UpdateProfile=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    const {authentication}=useContext(AuthenticationContext);
    let themeStyle;

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }

    const [isLoading,setIsloading]=useState(false);
    const [cloudinaryUrl,setCloudinaryUrl]=useState("https://api.cloudinary.com/v1_1/dkdkkeltx/image/upload");
    const [user,setUser]=useState(null);
    const [name,setName]=useState(null);
    const [errorName,setErrorName]=useState(null);
    const [phone,setPhone]=useState(null);
    const [errorPhone,setErrorPhone]=useState(null);
    const [avatar,setAvatar]=useState("https://res.cloudinary.com/dofdj0lqd/image/upload/v1610186880/aqutfu6ccnjdqo9vd3zb.png");
    const [selectedImage,setSelectedImage]=useState(null);
    const [dataToUpload,setDataToUpload]=useState(null);
    const updateImage=()=>{
        let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

            if (permissionResult.granted === false) {
                alert('Permission to access camera roll is required!');
                return;
            }

            let pickerResult = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],          
                base64: true
            });

            if (pickerResult.cancelled === true) {
                return;
            }
            setSelectedImage(pickerResult.uri );

            let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

            let data = {
                "file": base64Img,
                "upload_preset": "y0f7cjnf",
            }
            setDataToUpload(data);
            

        }
        openImagePickerAsync();
    }
    const uploadToCloudinary=async(data)=>{
        
    }
    const updateProfile=async()=>{
        setIsloading(true);

        if(dataToUpload!==null)
        {
            
            const uploadImage=await axios.post(cloudinaryUrl,dataToUpload);
            console.log("Check after upload:",uploadImage.data.secure_url);
            setAvatar(uploadImage.data.secure_url);
            
            const res=await UserApi.updateProfile(authentication,name,uploadImage.data.secure_url,phone);

            if(res.message==="OK")
            {
                alert("Update successfully");
            }
            else
            {
                alert("Update failed");

            }

        }
        else
        {
            const res=await UserApi.updateProfile(authentication,name,avatar,phone);
            if(res.message==="OK")
            {
                alert("Update successfully");
            }
            else
            {
                alert("Update failed");

            }
        }
        setIsloading(false);

        
    }
    
    useEffect(()=>{
        if(user===null)
        {
            setUser(props.route.params.user);
            if(props.route.params.user.name!==null && name===null)
            {
                setName(props.route.params.user.name);
            }
            if(props.route.params.user.phone!==null && phone===null)
            {
                setPhone(props.route.params.user.phone);
            }
            if(props.route.params.user.avatar!==null && props.route.params.user.avatar!==avatar)
            {
                setAvatar(props.route.params.user.avatar);
            }

        }
    
    })
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,
                        marginTop:20,
                        flexDirection:'column',
                        flex:1
                        }}>

            { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={componentStyle.titleView}>
                <Text style={themeStyle.title} >
                    Update Profile
                </Text>
            </View>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}
                                onPress={updateImage}
            >
                {selectedImage!==null?
                    <Image source={{uri:selectedImage}} style={{height:200,width:200}}/>
                    :
                    <Image source={{uri:avatar}} style={{height:200,width:200}}/>

                }
                <Text style={themeStyle.text}>Click to choose your new avatar</Text>

            </TouchableOpacity>
            <View style={{marginTop:20}}>
                <View>
                    <Text style={themeStyle.textMedium}>Name</Text>

                    <TextInput style={styles.input} defaultValue={name} onChangeText={text=>{setName(text)}}></TextInput>

                </View>
                
                <View style={{marginTop:20}}>
                    <Text style={themeStyle.textMedium}>Phone</Text>

                    <TextInput style={styles.input} defaultValue={phone} onChangeText={text=>{setPhone(text)}}></TextInput>

                </View>    
                
                <TouchableHighlight onPress={updateProfile} style={{marginTop:30}} >

                    <View style={themeStyle.button}>
                        <Text style={themeStyle.textButton}>Update</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.space}/>

                




            </View>

           
        </ScrollView>
    );
};
const componentStyle=StyleSheet.create({
    titleView:{
        justifyContent:'center',
        alignItems:'center'
    },



});
export default UpdateProfile;