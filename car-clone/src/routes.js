import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import NineEleven from './911/911Home';
import SevenEighteen from './718/718Home';
import FirstTimes from './1stTimes/1stTimesHome';

export default (
    <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/911/:car' component = {NineEleven}/>
        <Route path = '/718/:car' component = {SevenEighteen}/>
        <Route path = '/1stTime' component = {FirstTimes}/>
    </Switch>
)