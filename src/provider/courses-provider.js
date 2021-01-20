import React, {useState,useEffect} from 'react';
import {View} from 'react-native';
import CourseApi from "../api/courseApi";
const CoursesContext=React.createContext();


const CoursesProvider=(props)=>{
    const [totalCourse,setTotalCourse]=useState(0);

    const [DATA,setDATA]=useState([]);
    const [topNew,setTopNew]=useState([]);
    const [topSell,setTopSell]=useState([]);
    const [topRate,setTopRate]=useState([]);
    const [listCourses,setListCourses]=useState([]);
    const params={
        limit:20,
        page:1
    };
    const callApiTopSellCourse=async()=>{
        const response=await CourseApi.topSell(params);
        setTopSell(response.payload);
        
    }
    const callApiTopNewCourse=async()=>{
        const response=await CourseApi.topNew(params);
        setTopNew(response.payload);

    }
    const callApiTopRateCourse=async()=>{
        const response=await CourseApi.topRate(params);
        setTopRate(response.payload);

    }
    useEffect(()=>{
        if(totalCourse===0)
        {
                const getTotal=async()=>{
                    const res=await CourseApi.getTotalNumber();
                    setTotalCourse(res.payload);
                }
                getTotal();
        }
        if(totalCourse>0&& DATA.length<totalCourse)
        {
            if(topSell.length===0)
            {
                
                callApiTopSellCourse()
            }
            if(topNew.length===0)
            {
                
                callApiTopNewCourse()
            }
            if(topRate.length===0)
            {
                
                callApiTopRateCourse()
            }
            if(topSell.length>0)
            {
                topSell.map((item,i)=>{
                    let isExisted=false;
                    DATA.map((itemDATA,j)=>{
                        if(itemDATA.id===item.id)
                        {
                        
                            isExisted=true;
                        }
                    })
                    if(isExisted===false)
                    {
                        let temp=DATA;
                        temp=temp.concat(item);
                        setDATA(temp);
                    }
                    
                });
            }
            if(topNew.length>0)
            {
                topNew.map((item,i)=>{
                    let isExisted=false;
                    DATA.map((itemDATA,j)=>{
                        if(itemDATA.id===item.id)
                        {
                        
                            isExisted=true;
                        }
                    })
                    if(isExisted===false)
                    {
                        let temp=DATA;
                        temp=temp.concat(item);
                        setDATA(temp);
                    }
                    
                });
            }
            if(topRate.length>0)
            {
                topRate.map((item,i)=>{
                    let isExisted=false;
                    DATA.map((itemDATA,j)=>{
                        if(itemDATA.id===item.id)
                        {
                        
                            isExisted=true;
                        }
                    })
                    if(isExisted===false)
                    {
                        let temp=DATA;
                        temp=temp.concat(item);
                        setDATA(temp);
                    }
                    
                });
            }
            setListCourses(DATA);
        }
    })
    return(
        <CoursesContext.Provider value={{listCourses,setListCourses}}>
            {props.children}
        </CoursesContext.Provider>

    );
}

export {CoursesProvider,CoursesContext};