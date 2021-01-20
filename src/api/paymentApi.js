
import axiosClient from "./axiosClient";

const PaymentApi = {
    getFree: async(courseId,token)  => {
        const url='/payment/get-free-courses';

        const response =  await axiosClient.post(url,{courseId},{
            headers:{Authorization:`Bearer ${token}`}
        });
    
        return response;
    },
    getCourseInfo: async(courseId,token)=>{
        const url=`/payment/get-course-info/${courseId}`;
        
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }


};
export default PaymentApi;