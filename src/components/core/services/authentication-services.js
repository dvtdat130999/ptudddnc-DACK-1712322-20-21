export const login=(username,password)=>{
    if(username==='admin')
    {
        if(password==='admin')
        {
            return {status:200,user:{username,token:'abc',fullname:'Adminstrator'}}
        }
        else
        {
            return {status:404,errorString: 'Username and password are not match'}
        }
    }
    return {status:404,errorString:'Username is not existed'}
};

