import axiosClient from "./axiosClient";

const CategoryApi = {
    getAll: async()  => {
        const url='/category/all';

        const response =await  axiosClient.get(url);
        
        return response;
    },
    get: async(id)  => {
        const url=`/category/${id}`;

        const response =await  axiosClient.get(url);
        
        return response;
    },

};
export default CategoryApi;