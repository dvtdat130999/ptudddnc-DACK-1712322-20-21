import axiosClient from "./axiosClient";

const UserApi = {
    register: (user)  => {
        const url='/user/register';
       
        const response =  axiosClient.post(url, user);
        
        console.log("Check register in api");
        console.log(response);
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
        console.log("Check response in user api");
        console.log(response);
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