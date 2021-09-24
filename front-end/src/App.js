import React, { useState } from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from './Components/Navbar';
import { makeStyles } from '@mui/styles'; 
import LoginForm from './Components/LoginForm';

const useStyles = makeStyles(theme => ({
    container : {
        position : 'center',
    },
}));


export default function App (){

    const adminUser = {
        email : "1596934767@qq.com",
        password : "12"
    }

    const [user,setUser] = useState({user : "", email : ""});
    const [error,setError] = useState("");

    const Login = details => {
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("logged in");

            setUser({
                name : details.name,
                email : details.email,
            });

        }else {
            console.log("Don't match");
        }
    }

    const Logout = () => {
        setUser({
            user : "", 
            email : ""
        });
    }

    const classes = useStyles();

    return(
        // <>
        //     <Router>
        //         <Navbar/>
        //         <Switch>
        //             <Route path = '/' exact />
        //         </Switch>
        //     </Router>
        // </>
        <div>
            {(user.email != "") ? (
                <div>
                    <h2>Welcome,<span>{user.name}</span></h2>
                    <button onClick = {Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login = {Login} error = {error}/>
            )}
        </div>
        
    )
}