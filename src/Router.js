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
import Productdesciption from "./Productdesciption";
import Userdetails from "./Userdetails";
import Productvalidity from "./Productvalidity";
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
    path:"/Productdesciption",
   	isExactPath: true,
   	component: <Productdesciption />
   },
   {
    path:"/Userdetails",
   	isExactPath: true,
   	component: <Userdetails />
   },
   {
    path:"/Productvalidity",
   	isExactPath: true,
   	component: <Productvalidity />
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