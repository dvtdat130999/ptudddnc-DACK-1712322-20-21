import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {themes} from "./src/globals/themes"
import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import Login from "./src/components/Authentication/login"
import Register from "./src/components/Authentication/register";
import First from "./src/components/Authentication/first";
import ListCourses from "./src/components/Courses/ListCourses/list-courses";
import styles from "./src/globals/styles";

import Home from "./src/components/Main/Home/home";
import Browse from "./src/components/Main/Browse/browse";
import ListAuthors from "./src/components/Authors/ListAuthors/list-authors";

import VideoPlayer from "./src/components/CourseStudy/VideoPlayer/video-player";
import CourseStudy from "./src/components/CourseStudy/course-study";
import CourseStudyService from "./src/components/CourseStudy/CourseStudyService/course-study-service";
import Lesson from "./src/components/CourseStudy/ListOfLessons/Lesson/lesson";
import ListLessons from "./src/components/CourseStudy/ListOfLessons/list-lessons";
import Account from "./src/components/AccountManagement/Account/account";
import Setting from "./src/components/AccountManagement/Setting/setting";
import ChangeThemes from "./src/components/AccountManagement/ChangeThemes/change-themes";
import {navigationName} from "./src/globals/constants"
import ForgetPassword from "./src/components/Authentication/forget-password";
import Download from "./src/components/Main/Download/list-download";
import Search from "./src/components/Main/Search/search";
import {AuthenticationContext, AuthenticationProvider} from "./src/provider/authentication-provider";
import {CoursesProvider} from "./src/provider/courses-provider";
import RelatedPathsAndCourses from "./src/components/CourseStudy/RelatedPathsAndCourses/related-paths-courses";
import {BookmarkProvider} from "./src/provider/bookmark-provider";
import {ThemeContext, ThemeProvider} from "./src/provider/theme-provider";
import {UserProvider} from "./src/provider/users-provider";
import ListCategories from "./src/components/Categories/ListCategories/list-categories";
import ListPaths from "./src/components/Paths/ListPaths/list-paths";



const MainStack = createStackNavigator();
const AfterLoginStack = createStackNavigator();
const DownloadStack=createStackNavigator();
const FirstStack = createStackNavigator();


const CourseStack = createStackNavigator();
const BottomTab=createBottomTabNavigator();
const HomeStack=createStackNavigator();
const BrowseStack=createStackNavigator();
const SearchStack=createStackNavigator();

const SearchNavigation=()=>{
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name={navigationName.Search} component={Search} options={{ headerShown: false }}/>
            <SearchStack.Screen name={navigationName.CourseStudy} component={CourseStudy}  />
            <SearchStack.Screen name={navigationName.ListCourses} component={ListCourses} />
            <SearchStack.Screen name={navigationName.Authors} component={ListAuthors} />

        </SearchStack.Navigator>
    );
}
const BrowseNavigation=()=>{
    return(
        <BrowseStack.Navigator>
            <BrowseStack.Screen name={navigationName.Browse} component={Browse} options={{ headerShown: false }}/>
            <BrowseStack.Screen name={navigationName.CourseStudy} component={CourseStudy}  />
            <BrowseStack.Screen name={navigationName.ListCourses} component={ListCourses} />
            <BrowseStack.Screen name={navigationName.RelatedPathsAndCourses} component={RelatedPathsAndCourses} options={{title:'Related'}}/>
            <BrowseStack.Screen name={navigationName.Categories} component={ListCategories}  />
            <BrowseStack.Screen name={navigationName.Paths} component={ListPaths}  />
            <BrowseStack.Screen name={navigationName.Authors} component={ListAuthors}  />

        </BrowseStack.Navigator>
    );
}


const HomeNavigation=()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name={navigationName.Home} component={Home} />

            <HomeStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />
            <HomeStack.Screen name={navigationName.Setting} component={Setting} />
            <HomeStack.Screen name={navigationName.Account} component={Account} />
            <HomeStack.Screen name={navigationName.Theme} component={ChangeThemes} />
            <HomeStack.Screen name={navigationName.RelatedPathsAndCourses} component={RelatedPathsAndCourses} options={{title:'Related'}}/>
            <HomeStack.Screen name={navigationName.ListCourses} component={ListCourses} />

        </HomeStack.Navigator>
    );
}
const ListDownloadStack=()=>{
    return(
        <DownloadStack.Navigator>


            <DownloadStack.Screen name={navigationName.ListCourses} component={Download} options={{title:'Downloads',headerShown: false}}/>
            <DownloadStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />
            <DownloadStack.Screen name={navigationName.RelatedPathsAndCourses} component={RelatedPathsAndCourses} options={{title:'Related'}} />

        </DownloadStack.Navigator>
    );
}
const ListCoursesStack=()=>{
    return(
        <CourseStack.Navigator>


            <CourseStack.Screen name={navigationName.ListCourses} component={ListCourses} options={{title:'List Courses'}}/>
            <CourseStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />

        </CourseStack.Navigator>

    );
}
const AuthenticationStack=()=>{
    return(
        <FirstStack.Navigator mode="modal">
            <FirstStack.Screen name={navigationName.First} component={First}  options={{ headerShown: false }}/>
            <FirstStack.Screen name={navigationName.Login} component={Login}  options={{ headerShown: false }}/>
            <FirstStack.Screen name={navigationName.Register} component={Register}  options={{ headerShown: false }}/>
            <FirstStack.Screen name={navigationName.ForgetPassword} component={ForgetPassword}  options={{ headerShown: false }}/>

        </FirstStack.Navigator>
    );
}
const AfterLogin=()=>{
    return(
        <BottomTab.Navigator  >

            <BottomTab.Screen name={navigationName.Home} component={HomeNavigation}/>
            <BottomTab.Screen name={navigationName.Browse} component={BrowseNavigation}/>
            <BottomTab.Screen name={navigationName.ListDownload} component={ListDownloadStack} />
            <BottomTab.Screen name={navigationName.Search} component={SearchNavigation}/>

        </BottomTab.Navigator>
    );
}
const MainStackApp=()=>{
    const {changeTheme}=useContext(ThemeContext);
    console.log("Check change theme");
    console.log(changeTheme);
    return(
        <MainStack.Navigator  >
            <MainStack.Screen name={navigationName.Authentication} component={AuthenticationStack} options={{ headerShown: false }}/>

            <MainStack.Screen name={navigationName.AfterLogin} component={AfterLogin} options={{ headerShown: false }}/>

        </MainStack.Navigator>
    );
}

const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'black',
    },
};
export default function App() {

  return (
      <BookmarkProvider>
          <ThemeProvider>
              <CoursesProvider>
                  <AuthenticationProvider>
                      <UserProvider>
                          <NavigationContainer  >
                              <MainStackApp/>

                          </NavigationContainer>
                      </UserProvider>
                  </AuthenticationProvider>
              </CoursesProvider>
          </ThemeProvider>

      </BookmarkProvider>



      /*<View style={styles.container}>
            <Download/>

      </View>*/
  );
}

