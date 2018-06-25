import React, { Component } from 'react';
import './NavBar.css';
import logo from '../assets/porsche_logo.74060e83.jpg';
import IoAndroidShareAlt from 'react-icons/lib/io/android-share-alt';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    toggleMenu(){
        if(document.querySelector('.dropdown').classList[1] === undefined){
            document.querySelector('.dropdown').classList.add('opened')
            document.querySelector('.topBurger').classList.add('top-burger-animate')
            document.querySelector('.middleBurger').classList.add('middle-burger-animate')
            document.querySelector('.bottomBurger').classList.add('bottom-burger-animate')
        } else {
            document.querySelector('.dropdown').classList.remove('opened')
            document.querySelector('.topBurger').classList.remove('top-burger-animate')
            document.querySelector('.middleBurger').classList.remove('middle-burger-animate')
            document.querySelector('.bottomBurger').classList.remove('bottom-burger-animate')
        }
    }

    render() { 
        return ( 
            <div>
            <div className = "navbar-contain">
                <div className = "nav-section-edge left">
                    <div className = "flex-column burger-contain" onClick = {() => this.toggleMenu()}>
                        <div className = "topBurger burger"></div>
                        <div className = "middleBurger burger"></div>
                        <div className = "bottomBurger burger"></div>
                    </div>
                    <div className = "flex-row">
                        <h2 className = "red-text" weight = "bold">Time to</h2>
                        <h2>get in.</h2>
                    </div>
                </div>
                <div>
                    <a href = "/"><img src = {logo} alt = "logo" className = "logo"/></a>
                </div>
                <div className = "nav-section-edge right">
                    <ul className = "nav-tabs">
                    <div className = "link1">
                        <FaExternalLink className = "open-link external1"/>
                        <a target = "_blank" href = "https://www.porsche.com/usa/modelstart/">Build Your Own</a>
                    </div>
                    <div className = "link2">
                        <FaExternalLink className = "open-link external2"/>
                        <a target = "_blank" href = "https://www.porsche.com/usa/inventorysearch/">Search Inventory</a>
                    </div>
                    <div className = "link3">
                        <FaExternalLink className = "open-link external3"/>
                        <a target = "_blank" href = "https://www.porsche.com/usa/dealersearch/" className = "no-margin">Find a Dealer</a>
                    </div>
                        
                    </ul>
                    <div className = "share-contain">
                    <IoAndroidShareAlt className = "share"/>
                    <div className = "social-drawer">
                        <a target = "_blank" href = "https://twitter.com/intent/tweet?text=It%27s%20time%20to%20turn%20dreams%20into%20reality.%20It%E2%80%99s%20time%20to%20get%20in.&url=http%3A%2F%2Fpor.sc%2Fgetin&original_referer=https://timetogetin.com/"><FaTwitter className = "twitter"/></a>
                        <a target = "_blank" href = "https://www.facebook.com/v2.12/dialog/share?app_id=2017651738476078&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fxh_uObIASmW.js%3Fversion%3D42%23cb%3Df6911bf89c7a24%26domain%3Dtimetogetin.com%26origin%3Dhttps%253A%252F%252Ftimetogetin.com%252Ff1aedab658860cc%26relation%3Dopener&display=popup&e2e=%7B%7D&href=http%3A%2F%2Ftimetogetin.com&locale=en_US&mobile_iframe=false&next=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fxh_uObIASmW.js%3Fversion%3D42%23cb%3Df3c67c71e51fd2c%26domain%3Dtimetogetin.com%26origin%3Dhttps%253A%252F%252Ftimetogetin.com%252Ff1aedab658860cc%26relation%3Dopener%26frame%3Df323c69491cfe5c%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey&version=v2.12"><FaFacebook className = "facebook"/></a>
                    </div>
                    </div>

                </div>
            </div>
                <div className = "dropdown">
                <div className = "dropdown-nav">
                    <div><a>HOME</a></div>
                    <div><a><svg version="1.1" id="911Logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 607.6 204.2"><path d="M290.4,65.1c7.8-9,13.9-16.1,21.3-24.5c1.8-2,4.4-2.3,6.9-2.9C349.3,30,379.1,19.6,406.3,3c4.1-2.5,6-1.3,10.2,3.5 c4.4,4.9,8.6,8.7,12.5,12.7c5.2,5.4,5.6,7.4,2.4,11c-24.1,27.3-48.1,54.8-72.1,82.1c-16.1,18.2-32.5,36-49.4,53.5 c-18.8,19.4-40.3,30-67.7,26.3c-1.5-0.2-3.7-2.2-1.2-4.7c35.7-39.9,71.5-79.8,107.2-119.7c-18.2,2.9-36.9,6.9-57.3,0.6 C289.3,67.9,289.4,66.2,290.4,65.1z"></path><path d="M507.2,64.7c2.2-1.4,4.5-3.1,6.8-0.6c0.6,0.7-0.9,1.9-2.1,2.3C510.8,64.5,508.7,65.5,507.2,64.7z"></path><path d="M234.1,14c-12.5-5.5-25.8-7.5-39.1-8.2c-47.3-2.3-91.1,10.3-132.2,32.7c-16.1,8.8-30.9,19.3-42.2,34.1 C2,97.1,10.2,121,39.9,128.6c14.4,3.7,29,4.1,43.7,3.2c11.7-0.7,25.6-2.6,38-3.7C88.9,149.4,49.3,161.6,9.4,174 c-4.7,1.5-5.7,2.9-2.8,7.1c4.1,6.2,6.7,10.6,10.2,15.4c3,4.3,5.1,5.6,10.3,4c28.1-8.4,55.2-18.5,82.3-29.9 c38.9-16.3,75.7-36.3,107-65.1C230.5,92.7,243.9,78.9,252,61C261.8,39.5,255.5,23.5,234.1,14z M204,47.2c4.5,14.9-25,36.9-65.8,49.2 s-77.5,10.1-82-4.8s25-36.9,65.8-49.2S199.5,32.3,204,47.2z"></path><path d="M454.6,65.1c7.8-9,13.9-16.1,21.3-24.5c1.8-2,4.4-2.3,6.9-2.9C513.5,30,543.3,19.6,570.5,3c4.1-2.5,6-1.3,10.2,3.5 c4.4,4.9,8.6,8.7,12.5,12.7c5.2,5.4,5.6,7.4,2.4,11c-24.1,27.3-48.1,54.8-72.1,82.1c-16.1,18.2-32.5,36-49.4,53.5 c-18.8,19.4-40.3,30-67.7,26.3c-1.5-0.2-3.7-2.2-1.2-4.7c35.7-39.9,71.5-79.8,107.2-119.7c-18.2,2.9-36.9,6.9-57.3,0.6 C453.5,67.9,453.6,66.2,454.6,65.1z"></path></svg></a></div>
                    <div><a><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 607.6 204.2"><path d="M593.2,22.5c-8.7-9-19.5-13.6-31.4-16.3c-21.3-4.9-42.7-3.9-64,0.1c-25,4.6-49,12.2-69.3,28.2c-13.8,10.8-23,24.2-19,43.3 c0.9,4.1,6.6,8,3.5,11.4c-2.6,2.8-8.5,2.4-12.7,3.8c-21,6.9-40.8,16.1-56.1,32.6c-9.9,10.7-15.5,22.8-10.8,37.9 c4.9,15.6,17.1,23.3,31.2,28.5c18.5,6.8,37.8,8.4,57.3,8.5c7.2-0.3,14.4-0.5,21.6-1c30.6-2.3,59.9-9.3,87.2-23.9 c14.6-7.8,27.6-17.5,34.7-33.2c6.1-13.5,4-27.7-4.9-36.9c-2.7-2.7-8.5-4.2-7.7-7.7c0.6-2.5,6.3-3.8,9.8-5.6 c15.6-8,29.2-18,36.8-34.4C605.4,44.8,603.1,32.8,593.2,22.5z M513.6,129c2.3,15.3-25.4,32-61.9,37.4s-67.8-2.6-70.1-17.9 s25.4-32,61.9-37.4S511.3,113.7,513.6,129z M562.3,48.6c1.9,12.7-21.1,26.6-51.4,31.1c-30.3,4.5-56.3-2.2-58.2-14.9 s21.1-26.6,51.4-31.1C534.3,29.3,560.4,35.9,562.3,48.6z"></path><path d="M233.2,28.3c-4.7-7-10.4-13.8-16.9-20.6c-2.8-2.9-4.9-3.6-8.5-3.1c-23.9,3.7-48,4.9-72.2,5.4c-18.4,0.4-36.8,0.4-55.2,0.4 c-13.7,0-25.1,4-33,16.6c-6.1,8.8-12,17.1-17.6,26.2c-2.6,4.2-0.2,7.7,4.8,8c2.6,0.2,4.8-0.9,7.1-2c8.6-4.1,17.7-6.7,27-8.8 c27.8-6.3,56.2-3.1,84.3-5.6c-0.2,0.7-0.2,1.3-0.4,1.4c-4.2,2.5-8.5,5-12.8,7.5C83.4,86.7,41,133.5,8.2,189.4 c-1.9,2.6-4.1,6-2.9,7.7c1.6,2.4,5.1,2.1,8.3,2.1c10.5-0.1,21.3,0.3,31.7-1.4c13.4-2.2,20.6-12.1,26.9-22.8 c16.2-27.2,37.4-50.3,60.5-71.7c29.7-27.5,62.6-50.6,99-68.4C235.8,33,235.5,31.8,233.2,28.3z"></path><path d="M236.4,70.9c7.9-9.1,14.1-16.3,21.6-24.8c1.8-2,4.5-2.4,7-3c31.3-7.8,61.4-18.4,89.1-35.2c4.2-2.6,6-1.3,10.4,3.5 c4.5,5,8.7,8.8,12.7,12.9c5.3,5.5,5.7,7.5,2.4,11.2C355,63.1,330.7,91,306.3,118.8c-16.3,18.5-33,36.6-50.1,54.3 c-19,19.7-40.8,30.5-68.7,26.7c-1.6-0.2-3.7-2.2-1.2-4.8c36.2-40.4,72.5-80.9,108.8-121.4c-18.5,3-37.4,7-58.1,0.6 C235.3,73.7,235.4,72,236.4,70.9z"></path></svg></a></div>
                    <div><a><svg viewBox="0 0 541.6 108.7"><path fill="#d5001c" d="M0 13.8h20.7c11.8 0 16.7 4.7 16.7 18.1 0 14.5-5.1 18.6-16.9 18.6h-9.7V70H0V13.8zm10.8 9.8v17.8H19c5.8 0 7.3-1.3 7.3-9.1 0-7.2-1.7-8.7-7.3-8.7h-8.2zM43.8 41.8c0-23 5.1-28.9 21.7-28.9s21.7 5.9 21.7 28.9c0 22.1-4.3 29.2-21.7 29.2s-21.7-7.1-21.7-29.2zm32.1-.2c0-16.3-1.3-19-10.4-19s-10.4 2.7-10.4 19c0 18.6 1.3 20.7 10.4 20.7s10.4-2.1 10.4-20.7zM94.9 13.8h20.3c11.8 0 17.1 4.2 17.1 18.1 0 10.4-3.2 15.2-9.5 16.7L133.9 70H122l-9.6-19.5h-6.7V70H94.9V13.8zm10.8 9.8v17.8h8.1c5.5 0 7.4-.8 7.4-9.1 0-7.6-1.9-8.7-7.7-8.7h-7.8zM150.5 52.7c.4 7.3 2.1 9.6 8.7 9.6 6.1 0 8.2-1.9 8.2-7.2 0-4.5-2.1-6-8.1-7.5l-4.3-1.1c-9.6-2.4-14.7-6.3-14.7-17.1 0-10.4 4.9-16.5 18.6-16.5 14.6 0 18.5 5.8 18.9 18.6h-10.5c-.4-7.3-2.1-8.8-8.2-8.8-5.4 0-7.8 1.7-7.8 6.6 0 5.1 2.2 6.2 8.3 7.8l4.3 1.1c9.7 2.4 14.5 7 14.5 16.7 0 10.4-5.1 16.2-19.4 16.2-13.9 0-18.6-5-19.2-18.2h10.7v-.2zM185.7 41.8c0-23 5.1-28.9 21.7-28.9 16.4 0 19 6.8 19.7 22.1h-10.5c-.4-9.7-2-12.3-9.2-12.3-9.1 0-10.4 2.7-10.4 19 0 18.6 1.3 20.7 10.4 20.7 7.2 0 8.8-2.8 9.2-12.7h10.5c-.6 15.2-4.9 21.4-19.7 21.4-17.5-.1-21.7-7.2-21.7-29.3zM236 13.8h10.8v23.5h18.4V13.8H276V70h-10.8V46.4h-18.4V70H236V13.8zM285.5 13.8h33.3v9.8h-22.5v13.7H317v9.2h-20.6v14.9h22.5v8.7h-33.3V13.8h-.1zM390.9 40.4h29.7v7.4h-10.8v35h-8.1v-35h-10.8v-7.4zM424.7 40.4h8.2v42.4h-8.2V40.4zM438.4 82.9l1.9-42.4h9.6l9 28.2 8.6-28.2h9.7l2.1 42.4h-7.9l-1.3-28-8.8 28h-5.5l-8.9-28-1.2 28h-7.3zM484.3 40.4h25.1v7.4h-17v10.3H508V65h-15.6v11.3h17v6.6h-25.1V40.4zM520.3 69.8c.3 5.5 1.5 7.2 6.6 7.2 4.6 0 6.2-1.4 6.2-5.4 0-3.4-1.6-4.5-6.1-5.7l-3.3-.8c-7.3-1.8-11.1-4.8-11.1-12.9 0-7.9 3.7-12.5 14-12.5 11 0 14.2 4.4 14.5 14.1h-8.2c-.3-5.5-1.6-6.7-6.2-6.7-4.1 0-5.9 1.3-5.9 4.9 0 3.8 1.7 4.7 6.3 5.9l3.3.8c7.3 1.8 11.2 5.2 11.2 12.6 0 7.9-4.1 12.2-14.8 12.2-10.5 0-14-3.8-14.5-13.8l8 .1z"></path><g><path fill="#d5001c" d="M396.2 21.9c.1 2.4 1 3 3.3 3 2.5 0 3-.7 3-2.3 0-1.6-.6-1.9-2.9-2.4l-2.8-.5c-3.4-.7-5.9-2.7-5.9-7 0-4.8 3.1-7 8.6-7 6.2 0 8.4 2.4 8.4 7.7h-5.2c-.1-2.4-.8-3-3-3-2.3 0-3 .5-3 2.2 0 1.4.6 2 3.1 2.5l2.8.5c3.9.8 5.7 2.9 5.7 6.8 0 4-2.1 6.7-8.9 6.7-7.1 0-8.2-3.2-8.5-7.3l5.3.1zM410.1 6h2.8V.6h5.8V6h5.5v4.9h-5.5v10.3c0 2.5.8 3 3 3h2.4v4.6h-3.5c-5.6 0-7.8-2.1-7.8-7.9v-10h-2.6V6h-.1z"></path></g><g><path fill="#d5001c" d="M359 21.9l-29.3 10.6V12.9L363.9 0h16.6v108.7H359V21.9z"></path></g><path fill="#d5001c" d="M349 78.3v5.3H0v-5.3h349z"></path></svg></a></div>
                </div>
                <div className = "dropdown-cars-contain">
                    <h2><span><b style = {{color: '#d5001c'}}>Time to</b></span><span><b style = {{color: 'white'}}>Find your 911.</b></span></h2>
                    <div className = "dropdown-cars">
                        <div className = "car-section">
                            <a className = "nine-carrera">
                                <div className = "car-image"></div>
                                <div className = "gradient-border"></div>
                                <div className = "dropdown-car-name">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 224.8 313.4"><polygon fill="#d5001c" points="0,0 156.7,156.7 0,313.4 68.1,313.4 224.8,156.7 68.1,0 "></polygon></svg>
                                    <p>911 Carrera</p>
                                </div>
                            </a>
                        </div>
                        <div className = "car-section">
                            <a className = "nine-t">
                                <div className = "car-image"></div>
                                <div className = "gradient-border"></div>
                                <div className = "dropdown-car-name">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 224.8 313.4"><polygon fill="#d5001c" points="0,0 156.7,156.7 0,313.4 68.1,313.4 224.8,156.7 68.1,0 "></polygon></svg>
                                    <p>911 T</p>
                                </div>
                            </a>
                        </div>
                        <div className = "car-section">
                            <a className = "nine-gts">
                                <div className = "car-image"></div>
                                <div className = "gradient-border"></div>
                                <div className = "dropdown-car-name">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 224.8 313.4"><polygon fill="#d5001c" points="0,0 156.7,156.7 0,313.4 68.1,313.4 224.8,156.7 68.1,0 "></polygon></svg>
                                    <p>911 GTS</p>
                                </div>
                            </a>
                        </div>
                        <div className = "car-section">
                            <a className = "nine-turbo">
                                <div className = "car-image"></div>
                                <div className = "gradient-border"></div>
                                <div className = "dropdown-car-name">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 224.8 313.4"><polygon fill="#d5001c" points="0,0 156.7,156.7 0,313.4 68.1,313.4 224.8,156.7 68.1,0 "></polygon></svg>
                                    <p>911 Turbo</p>
                                </div>
                            </a>
                        </div>
                        
                    </div>

                </div>

                </div>
            </div>

         )
    }
}
 
export default NavBar;