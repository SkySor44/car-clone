import React, { Component } from 'react';
import './AutoSlider.css';
import caymanGts from '../assets/718\ Cayman\ GTS.png';
import carreraGts from '../assets/911\ GTS.png';
import carreraT from '../assets/911\ T.png';
import caymanS from '../assets/718\ Cayman\ S.png';
import boxsterGts from '../assets/718\ Boxster\ GTS.png';

class AutoSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carsArr: [caymanGts, carreraGts, carreraT, caymanS, boxsterGts, carreraGts, carreraT, caymanS, boxsterGts, carreraGts, carreraT, caymanS, boxsterGts, carreraGts],
            currentCar: caymanGts
         }

         this.changeCar = this.changeCar.bind(this)
    }

    componentDidMount(){
        this.changeCar()
    }

    changeCar(start = 0){
        if(start === 0){
            this.setState({
                currentCar: this.state.carsArr[start]
            })
            start++;
            this.changeCar(start); 
        }
       else if(start <= 13){
            setTimeout(() => {
                this.setState({
                    currentCar: this.state.carsArr[start]
                })
                start++;
                this.changeCar(start);
                // setTimeout(() => {
                //     document.querySelector('.as-car-image')
                // }, 1000)
            }, 1500)
        } else if (start === 14){
            this.props.changeToDrFn()
        } 

   
    }


    render() { 

        return ( 
            <div className = "auto-slider-contain">
            <div className = "as-car-image" style = {{backgroundImage: `url("${this.state.currentCar}")`}}></div>
            <div className = "as-background-image"></div>

            //Maybe wrap current car image div in another div with a position of absolute and a z-index of 1 so it is behind current car div. Set its background image to the next car so when it scrolls in and out you can see the next car behind it.
        </div>
         )
    }
}
 
export default AutoSlider;