
import axiosClient from "./axiosClient";

const InstructorApi = {
    getAll: async()  => {
        const url='/instructor';

        const response =await  axiosClient.get(url);
        

        return response;
    },
    get: async(id)=>{
        const url=`/instructor/detail/${id}`;
        console.log("Check url");
        console.log(url);
        const response=await axiosClient.get(url);
        return response;
    }


};
export default InstructorApi;