import React from 'react';
import "./Login.css";
import Button from "@material-ui/core/Button";
import {useUpdateUser} from "./UserProvider";

const Login = () => {
    const signIn = useUpdateUser();

    return (
        <div className="login">
            <div className="login__container">
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
};
export default Login;
