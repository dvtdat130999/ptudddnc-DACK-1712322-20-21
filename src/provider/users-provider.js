import React, {useState} from 'react';
import {View} from 'react-native';
import {users} from "../data/users";

const UserContext=React.createContext();

const UserProvider=(props)=>{
    const [userList,setUserList]=useState(users);

    return(
        <UserContext.Provider value={{userList,setUserList}}>
            {props.children}
        </UserContext.Provider>

    );
}

export {UserProvider,UserContext};