import React from "react";
import {ReactDOM, render} from 'react-dom';
import{
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRoter
} from "react-router-dom";

import Home from "./Home";
import Postjob from "./Postjob";
import Login from "./Useraccount/Login";
import Pnewjob from "./Pnewjob";
import Forgetpassword from "./Useraccount/Forgetpassword";
import Forgetotp from "./Useraccount/Forgetotp";
import Newpassword from "./Useraccount/Newpassword";
import Signup from "./Useraccount/Signup";

const appRoute =[
   {
   	path:"/",
   	isExactPath: true,
   	component: <Home />
   },
   {
    path:"/Home",
   	isExactPath: true,
   	component: <Home />
   },
   {
    path:"/Postjob",
   	isExactPath: true,
   	component: <Postjob />
   },
   {
    path:"Useraccount/Login",
   	isExactPath: true,
   	component: <Login />
   },
   {
    path:"/Pnewjob",
   	isExactPath: true,
   	component: <Pnewjob />
   },
   {
    path:"Useraccount/Forgetpassword",
   	isExactPath: true,
   	component: <Forgetpassword />
   },
   {
    path:"Useraccount/Forgetotp",
   	isExactPath: true,
   	component: <Forgetotp />
   },
   {
    path:"Useraccount/Newpassword",
   	isExactPath: true,
   	component: <Newpassword />
   },
   {
    path:"Useraccount/Signup",
   	isExactPath: true,
   	component: <Signup />
   },
];

//HashRouter  also apply # 

const routes= (
	<BrowserRouter>
	<Switch>
		{appRoute.map((route, idx) => {
			console.log(route,"1");
			return <Route
			    key={route.path}
			    path={route.path}
			    exact={route.isExactPath}
			    render={(params) => {
			    	 return route.component;
			    }}
		/>;
		})}
	</Switch>
	</BrowserRouter>
);

export default routes;