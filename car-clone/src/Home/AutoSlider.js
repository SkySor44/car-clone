import React, { Component } from 'react';
import './AutoSlider.css'

class AutoSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carsArr: []
         }
    }
    render() { 


        return ( 
            <div className = "auto-slider-contain">
            <div className = "as-background-image"></div>
            <div className = "as-car-image"></div>
        </div>
         )
    }
}
 
export default AutoSlider;