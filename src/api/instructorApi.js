
import axiosClient from "./axiosClient";

const InstructorApi = {
    getAll: ()  => {
        const url='/instructor';

        const response =  axiosClient.get(url);
        

        return response;
    },
    get: (id)=>{
        const url=`/instructor/detail/${id}`;
        console.log("Check url");
        console.log(url);
        const response=axiosClient.get(url);
        return response;
    }


};
export default InstructorApi;