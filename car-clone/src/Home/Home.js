import React, { Component } from 'react';
import FirstTimeIntro from './1stTimeIntro';
import SevenEighteenIntro from './718Intro';
import NineElevenIntro  from './911Intro';
import AutoSlider from './AutoSlider';
import DrPorsche  from './DrPorsche';
import ManualSlider from './ManualSlider';
import {Throttle} from 'react-throttle';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currPage: [<AutoSlider />, <DrPorsche />, <NineElevenIntro />, <SevenEighteenIntro />, <FirstTimeIntro />, <ManualSlider />],
            currPageIndex: 0,
            oncePerWheel: 1
         }
    }


    changeView(e){
        this.state.oncePerWheel++;
    if(this.state.oncePerWheel % 2 === 0 && e.deltaY > 0){
        if(this.state.currPageIndex === this.state.currPage.length - 1){
            return this.setState({currPageIndex: 0})
            } else { 
                let current = this.state.currPageIndex
                current++
                this.setState({currPageIndex: current})}
        } else if (this.state.oncePerWheel % 2 === 0  && e.deltaY < 0){
            if(this.state.currPageIndex === 0){
               return null
            } else { 
                let current = this.state.currPageIndex
                current-- 
                this.setState({currPageIndex: current})}
    }
}

    render() {
        const {currPage, currPageIndex} = this.state
        console.log(currPage[currPageIndex])

        return ( 
            <div style = {{position: 'relative', height: '100vh'}}>
            <Throttle time = "1500" handler = "onWheel">
                <div onWheel = {(e) => this.changeView(e)} style = {{height: '100%', width: '100%', position: 'absolute'}}>

                </div>
            </Throttle>
            {currPage[currPageIndex]}
            </div>


         )
    }
}
 
export default Home;