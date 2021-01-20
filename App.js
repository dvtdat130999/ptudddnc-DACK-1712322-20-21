import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MaterialIcons,Feather,FontAwesome,AntDesign  } from '@expo/vector-icons'; 
import HomeIcon from "./assets/home.png";
import BrowseIcon from "./assets/browse.png";
import MyCoursesIcon from "./assets/my-course.png";
import SearchIcon from "./assets/search.png";
import {themes} from "./src/globals/themes"
import React, {useContext, useState,useEffect} from 'react';
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
import Lesson from "./src/components/CourseStudy/Lesson/lesson";
import LessonDetail from "./src/components/CourseStudy/LessonDetail/lesson-detail";
import ListRecommendCourse from "./src/components/Main/Browse/ListRecommendCourse/list-recommend-course";
import ListCoursesBookmark from "./src/components/Main/Home/ListCoursesBookmark/list-courses-bookmark";
import Account from "./src/components/AccountManagement/Account/account";
import Setting from "./src/components/AccountManagement/Setting/setting";
import ChangeThemes from "./src/components/AccountManagement/ChangeThemes/change-themes";
import {navigationName} from "./src/globals/constants"
import ForgetPassword from "./src/components/Authentication/forget-password";
import Download from "./src/components/Main/Download/list-download";
import MyCourses from "./src/components/Main/MyCourses/my-courses";
import Search from "./src/components/Main/Search/search";
import Language from "./src/components/AccountManagement/Language/language";

import {AuthenticationContext, AuthenticationProvider} from "./src/provider/authentication-provider";
import {SearchHistoryProvider} from "./src/provider/search-history-provider";
import {LanguageProvider,LanguageContext} from "./src/provider/language-provider";

import {CoursesProvider} from "./src/provider/courses-provider";
import RelatedPathsAndCourses from "./src/components/CourseStudy/RelatedPathsAndCourses/related-paths-courses";
import {BookmarkContext, BookmarkProvider} from "./src/provider/bookmark-provider";
import {ThemeContext, ThemeProvider} from "./src/provider/theme-provider";
import {MyCoursesContext,MyCoursesProvider} from "./src/provider/mycourses-provider";
import {UserProvider} from "./src/provider/users-provider";
import ListCategories from "./src/components/Categories/ListCategories/list-categories";
import ListPaths from "./src/components/Paths/ListPaths/list-paths";
import AuthorDetail from "./src/components/Authors/AuthorDetail/author-detail";
import CourseApi from "./src/api/courseApi";
import UserApi from "./src/api/userApi";
import ListDownloadItemVideo from "./src/components/Main/Download/list-download-item-video";
import ListDownload from "./src/components/Main/Download/list-download";
import UpdateProfile from "./src/components/AccountManagement/UpdateProfile/update-profile";
const MainStack = createStackNavigator();
const AfterLoginStack = createStackNavigator();
const MyCoursesStack=createStackNavigator();
const FirstStack = createStackNavigator();


const CourseStack = createStackNavigator();
const BottomTab=createBottomTabNavigator();
const HomeStack=createStackNavigator();
const BrowseStack=createStackNavigator();
const SearchStack=createStackNavigator();

const SearchNavigation=()=>{
    const {changeLanguage}=useContext(LanguageContext);
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name={navigationName.Search} component={Search} options={{ title:changeLanguage.Search }}/>
            <SearchStack.Screen name={navigationName.CourseStudy} component={CourseStudy} options={{ title:changeLanguage.CourseStudy }} />
            <SearchStack.Screen name={navigationName.ListCourses} component={ListCourses} options={{  headerShown: false  }}/>
            <SearchStack.Screen name={navigationName.Authors} component={ListAuthors} options={{ title: changeLanguage.Authors }}/>
            <SearchStack.Screen name={navigationName.LessonDetail} component={LessonDetail}  options={{ headerShown: false }}/>
            <SearchStack.Screen name={navigationName.AuthorDetail} component={AuthorDetail} options={{ headerShown: false }} />

        </SearchStack.Navigator>
    );
}
const BrowseNavigation=()=>{
    const {changeLanguage}=useContext(LanguageContext);

    return(
        <BrowseStack.Navigator>
            <BrowseStack.Screen name={navigationName.Browse} component={Browse}/>
            <BrowseStack.Screen name={navigationName.CourseStudy} component={CourseStudy} options={{ title:changeLanguage.CourseStudy }} />
            <BrowseStack.Screen name={navigationName.ListCourses} component={ListCourses} options={{ headerShown: false }}/>
            <BrowseStack.Screen name={navigationName.RelatedPathsAndCourses} component={RelatedPathsAndCourses} options={{ headerShown: false }}/>
            <BrowseStack.Screen name={navigationName.Categories} component={ListCategories} options={{ title:changeLanguage.Categories }} />
            <BrowseStack.Screen name={navigationName.Paths} component={ListPaths} options={{ headerShown: false }} />
            <BrowseStack.Screen name={navigationName.Authors} component={ListAuthors} options={{ title:changeLanguage.Authors }} />
            <BrowseStack.Screen name={navigationName.AuthorDetail} component={AuthorDetail} options={{ headerShown: false }}  />
            <BrowseStack.Screen name={navigationName.LessonDetail} component={LessonDetail} options={{ headerShown: false }}  />
            <BrowseStack.Screen name={navigationName.ListRecommendCourse} component={ListRecommendCourse} options={{ title:changeLanguage.Recommend }}  />

        </BrowseStack.Navigator>
    );
}


const HomeNavigation=()=>{
    const {changeLanguage}=useContext(LanguageContext);

    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name={navigationName.Home} component={Home}options={{ title:changeLanguage.Home }}/>

            <HomeStack.Screen name={navigationName.CourseStudy} component={CourseStudy} options={{ title:changeLanguage.CourseStudy }} />
            <HomeStack.Screen name={navigationName.Setting} component={Setting} options={{ title:changeLanguage.Setting }}/>
            <HomeStack.Screen name={navigationName.UpdateProfile} component={UpdateProfile} options={{ title:changeLanguage.UpdateProfile }}/>
            <HomeStack.Screen name={navigationName.Language} component={Language} options={{ title:changeLanguage.Language }}/>

            <HomeStack.Screen name={navigationName.Account} component={Account} options={{ title:changeLanguage.Account }}/>
            <HomeStack.Screen name={navigationName.Theme} component={ChangeThemes} options={{ title:changeLanguage.Theme }}/>
            <HomeStack.Screen name={navigationName.RelatedPathsAndCourses} component={RelatedPathsAndCourses} options={{ headerShown: false }}/>
            <HomeStack.Screen name={navigationName.ListCourses} component={ListCourses} options={{ headerShown: false }}/>
            <HomeStack.Screen name={navigationName.LessonDetail} component={LessonDetail} options={{ headerShown: false }}/>
            <HomeStack.Screen name={navigationName.ListCoursesBookmark} component={ListCoursesBookmark}  options={{ title:changeLanguage.Recommend }}/>

        </HomeStack.Navigator>
    );
}
const MyCoursesNavigation=()=>{
    const {changeLanguage}=useContext(LanguageContext);
    return(
        <MyCoursesStack.Navigator>


            <MyCoursesStack.Screen name={navigationName.MyCourses} component={MyCourses} />
            <MyCoursesStack.Screen name={navigationName.CourseStudy} component={CourseStudy} options={{title:changeLanguage.CourseStudy}} />
            <MyCoursesStack.Screen name={navigationName.VideoDownload} component={ListDownloadItemVideo}  />
            <MyCoursesStack.Screen name={navigationName.ListDownload} component={ListDownload} options={{title:changeLanguage.Download}}/>

        </MyCoursesStack.Navigator>
    );
}
const ListCoursesStack=()=>{
    return(
        <CourseStack.Navigator>


            <CourseStack.Screen name={navigationName.ListCourses} component={ListCourses} options={{ headerShown: false }}/>
            <CourseStack.Screen name={navigationName.CourseStudy} component={CourseStudy} options={{ headerShown: false }}/>

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
        <BottomTab.Navigator tabBarOptions={{activeTintColor: 'blue'}}>

            <BottomTab.Screen name={navigationName.Home} component={HomeNavigation} 
                                options={{
                                    tabBarLabel:"Home",
                                    tabBarIcon:({color,size})=>{
                                        return <FontAwesome name="home" color={color} size={size} />
                                    }
                                }}/>
            <BottomTab.Screen name={navigationName.Browse} component={BrowseNavigation}
                                options={{
                                    tabBarLabel:"Browse",
                                    tabBarIcon:({color,size})=>{
                                        return <AntDesign  name="folderopen" color={color} size={size} />
                                     
                                    }
                                }}
            />
            <BottomTab.Screen name={navigationName.MyCourses} component={MyCoursesNavigation} 
                                options={{
                                    tabBarLabel:"My Courses",
                                    
                                    tabBarIcon:({color,size})=>{
                                        return <AntDesign  name="file1" color={color} size={size} />
                                   
                                    }
                                }}
            />
            <BottomTab.Screen name={navigationName.Search} component={SearchNavigation}
                                options={{
                                    tabBarLabel:"Search",
                                    tabBarIcon:({color,size})=>{
                                        return <Feather  name="search" color={color} size={size} />
                                    
                                    }
                                }}
            />

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

export default function App() {

  return (
      <LanguageProvider>
        <SearchHistoryProvider>
                <AuthenticationProvider>
                    <MyCoursesProvider>
                        <BookmarkProvider>
                            <ThemeProvider>
                                <CoursesProvider>
                                        <UserProvider>
                                            <NavigationContainer  >
                                                <MainStackApp/>

                                            </NavigationContainer>
                                        </UserProvider>
                                </CoursesProvider>
                            </ThemeProvider>

                        </BookmarkProvider>
                    </MyCoursesProvider>
                </AuthenticationProvider>

            </SearchHistoryProvider>
        
      </LanguageProvider>
    


  );
}

