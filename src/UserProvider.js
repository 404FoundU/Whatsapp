import React, {useContext, useState} from 'react';
import {auth, provider} from "./firebase";

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();
export const useUser = () => useContext(UserContext);
export const useUpdateUser = () => useContext(UpdateUserContext);
const UserProvider = ({children}) => {
    const [user, setUser] = useState();


    const toggleUser = () => {
        auth.signInWithPopup(provider).then(
            result => setUser(result.user)
        ).catch( error => alert(error.message))
    };
    return (
        <UserContext.Provider value={user}>
            <UpdateUserContext.Provider value={toggleUser}>
                {children}
            </UpdateUserContext.Provider>
        </UserContext.Provider>
);
};
export default UserProvider;
