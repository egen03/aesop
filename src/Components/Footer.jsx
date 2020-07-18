import React, { Component } from 'react';
import './Styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="emailslot"> <p>I would like to receive communications about Aesop  productions, services, stores and events and matters <br />of cultural interest.</p> 
                    <input type="text" size="50" placeholder="Email address"/>
                </div>
                <div className="cluster">
                <ul className="footerlinks" aria-label="Contact Us">
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Delivery and Returns</li>
                    <li>Track your order</li>
                    <li>Check gift card Balance</li>
                    <li>Terms and conditions</li>
                    <li>Accessibly</li>
                </ul>

                <ul className="footerlinks" aria-label="About">
                    <li>Our Story</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Corporate gifts</li>
                    <li>Facial appointments</li>
                </ul>

                <ul className="footerlinks" aria-label="Social">
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>

                </div>
                <div className="blackBar">
                    <div>&copy;	Aesop</div>
                    <div className="usa">United States</div> 
                </div>
            </div>
        )
    }
}

export default Footer