import axiosClient from "./axiosClient";

const CourseApi = {
    getTotalNumber:async()=>{
        const url='/course/total-number';
        const response =  await axiosClient.get(url);
        
        return response;
    },
    topSell: async(params)  => {
        const url='/course/top-sell';

        const response =await  axiosClient.post(url,params);
        
        return response;
    },
    topNew: async(params)  => {
        const url='/course/top-new';

        const response =await  axiosClient.post(url,params);
        
        return response;
    },
    topRate:async (params)  => {
        const url='/course/top-rate';

        const response =await  axiosClient.post(url,params);
        
        return response;
    },
    courseInfo: async(id)  => {
        const url=`/course/get-course-info?id=${id}`;

        const response =await  axiosClient.get(url);
        
        return response;
    },
    courseDetail:async (courseId,userId)  => {
        const url=`/course/get-course-detail/${courseId}/${userId}`;

        const response = await axiosClient.get(url);
        
        return response;
    },
    courseDetailWithLesson:async(courseId,token)=>{
        const url=`/course/detail-with-lesson/${courseId}`;
        const response=await axiosClient.get(url,{
            headers:{Authorization:`Bearer ${token}`}

        });
        return response;
    },
    searchByKeyword:async (keyword)=>{
        const url='/course/search';
        const params={
            keyword:keyword,
            // opt:{
            //     sort:{
            //         attribute:'price',
            //         rule:'DESC',
            //     },
            //     category:[],
            //     time:[{min:0}],
            //     price:[
            //         {
            //             min:0,
            //         },
            //     ],

            // },
            // limit:20,
            // offset:1,
        };
        const response = await axiosClient.post(url,params);
        return response;

    },
    searchByCategory:async(categoryId)=>{
        const url='/course/search';
        const params={
            keyword:"",
            opt:{
                sort:{
                    attribute:'price',
                    rule:'DESC',
                },
                category:[categoryId],
                time:[{min:0}],
                price:[
                    {
                        min:0,
                    },
                ],

            },
            limit:10,
            offset:1,
        };
        const response = await axiosClient.post(url,params);
        return response;

    },
    
};
export default CourseApi;