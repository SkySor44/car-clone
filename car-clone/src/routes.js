import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import NineEleven from './911/911Home';
import SevenEighteen from './718/718Home';
import FirstTimes from './1stTimes/1stTimesHome';
import NineElevenCars from './911/911Cars';
import SevenEighteenCars from './718/718Cars';

export default (
    <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/911' component = {NineEleven}/>
        <Route path = '/911/:car' component = {NineElevenCars}/>
        <Route exact path = '/718' component = {SevenEighteen}/>
        <Route path = '/718/:car' component = {SevenEighteenCars}/>
        <Route path = '/1stTime' component = {FirstTimes}/>
    </Switch>
)