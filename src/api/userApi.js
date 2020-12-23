import axiosClient from "./axiosClient";

const UserApi = {
    register: (user)  => {
        const url='/user/register';
       
        const response =  axiosClient.post(url, user);
        
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
};
export default UserApi;