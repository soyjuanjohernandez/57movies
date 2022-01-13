import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/global.scss';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";

import Button from '../components/atoms/button/Button';
import Input from '../components/atoms/input/Input';
import BottomNav from "../components/molecules/bottomNav/BottomNav";



export const App = () => {
    return (

        <BrowserRouter>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/detail" component={Detail}/>
                    <Route exact path="/Favorites" component={Favorites}/>
                    <Route component={NotFound}/>
            </Switch>
            
        </BrowserRouter>
    )
}
