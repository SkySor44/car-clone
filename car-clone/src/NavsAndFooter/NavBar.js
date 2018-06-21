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
    render() { 
        return ( 
            <div className = "navbar-contain">
                <div className = "nav-section-edge left">
                    <div className = "flex-column burger-contain">
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
                        <a target = "_blank" href = "https://www.porsche.com/usa/modelstart/"><FaExternalLink className = "open-link"/>Build Your Own</a>
                        <a target = "_blank" href = "https://www.porsche.com/usa/inventorysearch/"><FaExternalLink className = "open-link"/>Search Inventory</a>
                        <a target = "_blank" href = "https://www.porsche.com/usa/dealersearch/" className = "no-margin"><FaExternalLink className = "open-link"/>Find a Dealer</a>
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
         )
    }
}
 
export default NavBar;