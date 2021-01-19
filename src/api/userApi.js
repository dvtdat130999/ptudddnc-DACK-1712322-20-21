import axiosClient from "./axiosClient";

const UserApi = {
    register: async (user)  => {
        const url='/user/register';
       
        const response =await  axiosClient.post(url, user);
        
        return response;
    },
    login: async(email,password)=>{
        const url='/user/login';
        
        const payload={
            email:email,
            password:password
        };
        
        const response= await axiosClient.post(url,payload);
        
        return response;
    },
    getUser:async (token)=>{
        const url="/user/me"
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    },
    likeCourse:async (token,courseId)=>{
        const url="/user/like-course"
        const response=await axiosClient.post(url,{courseId},{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    },
    getCourseLikeStatus:async(token,courseId)=>{
        const url=`/user/get-course-like-status/${courseId}`;
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    },
    getFavoriteCourses:async(token)=>{
        const url="/user/get-favorite-courses";
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}
        });    
        return response;
    },
    forgetPassword:async(email)=>{
        const url="/user/forget-pass/send-email";
        const response=await axiosClient.post(url,{email});
        return response;
    },
    changePassword:async(userId,oldPass,newPass,token)=>{
        const url="/user/change-password";
        const params={
            id:userId,
            oldPass:oldPass,
            newPass:newPass,
        }
        console.log("Check params");
        console.log(params);
        const response=await axiosClient.post(url,params,{
            headers:{Authorization:`Bearer ${token}`}
        });
       
        return response;
    },
    getProcessCourses:async(token)=>{
        const url="user/get-process-courses";
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    },
    getRecommendCourse:async(userId)=>{
        console.log("Vao trong api user recommend")
        const limit=20;
        const offset=1;
        const url=`/user/recommend-course/${userId}/${limit}/${offset}`;
        const response=await axiosClient.get(url);
        return response;
    },
    updateProfile:async(token,name,avatar,phone)=>{
        const url="user/update-profile";
        const payload={
            name:name,
            avatar:avatar,
            phone:phone
        }
        const response=await axiosClient.put(url,payload,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }
};
export default UserApi;