
import axiosClient from "./axiosClient";

const LessonApi = {
    getRecentVideo:async(token,courseId,lessonId)=>{
        const url=`/lesson/video/${courseId}/${lessonId}`;
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    },
    updateCurrentTimeLearn: async(token,lessonId,currentTime)=>{
        const url=`/lesson/update-current-time-learn-video`;
        const payload={
            lessonId:lessonId,
            currentTime:currentTime
        }
        const response=await axiosClient.put(url,payload,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }


};
export default LessonApi;