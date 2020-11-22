import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from "./src/components/authentication/login"
import Register from "./src/components/authentication/register";
import First from "./src/components/authentication/first";
import Logo from "./src/components/image/logo-pluralsight.png"
import Course from "./src/components/browseCourses/course";
import CourseOfList from "./src/components/browseCourses/courseOfList";
import styles from "./src/components/styles";

import Home from "./src/components/browseCourses/home";
export default function App() {
  return (
    <View style={styles.container}>

      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

