import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/global.scss';
import Layout from "../containers/Layout";

import Button from '../components/atoms/button/Button';
import Input from '../components/atoms/input/Input';



export const App = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route component={NotFound}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}