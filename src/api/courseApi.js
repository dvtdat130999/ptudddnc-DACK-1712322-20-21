import axiosClient from "./axiosClient";

const CourseApi = {
    getTotalNumber:()=>{
        const url='/course/total-number';
        const response =  axiosClient.get(url);
        
        return response;
    },
    topSell: (params)  => {
        const url='/course/top-sell';

        const response =  axiosClient.post(url,params);
        
        return response;
    },
    topNew: (params)  => {
        const url='/course/top-new';

        const response =  axiosClient.post(url,params);
        
        return response;
    },
    topRate: (params)  => {
        const url='/course/top-rate';

        const response =  axiosClient.post(url,params);
        
        return response;
    },
    courseInfo: (id)  => {
        const url=`/course/get-course-info?id=${id}`;

        const response =  axiosClient.get(url);
        
        return response;
    },
    courseDetail: (courseId,userId)  => {
        const url=`/course/get-course-detail/${courseId}/${userId}`;

        const response =  axiosClient.get(url);
        
        return response;
    },
    courseDetailWithLesson:(courseId)=>{
        const url=`/course/detail-with-lesson/${courseId}`;
        const response =  axiosClient.get(url);
        return response;
    },
    searchByKeyword:(keyword)=>{
        const url='/course/search';
        const params={
            keyword:keyword,
            //opt:{
                // sort:{
                //     attribute:'price',
                //     rule:'DESC',
                // },
                // category:[],
                // time:[{min:0}],
                // price:[
                //     {
                //         min:0,
                //     },
                // ],

            //},
            //limit:10,
            //offset:1,
        };
        const response =  axiosClient.post(url,params);
        console.log("Check search in api");
        console.log(response);
        return response;

    },
    searchByCategory:(categoryId)=>{
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
        const response =  axiosClient.post(url,params);
        console.log("Check search in api by category");
        console.log(response);
        return response;

    },
};
export default CourseApi;