import axiosClient from "./axiosClient";

const CategoryApi = {
    getAll: ()  => {
        const url='/category/all';

        const response =  axiosClient.get(url);
        
        return response;
    },
    get: (id)  => {
        const url=`/category/${id}`;

        const response =  axiosClient.get(url);
        
        return response;
    },

};
export default CategoryApi;