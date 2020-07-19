import React, { Component } from 'react';
import './Styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>

                <div className="discover">
                    <div>
                        <div className="distext">
                            <div className="kits"></div>
                            <div className="care"></div>
                        </div>
                    </div>
                </div>

                <div className="quote">
                    
                        <p>'And your very flesh shall be a great poem'</p>
                        <p className="folink">Wait Whitman</p>
                    
                    
                </div>

                <div className="borderline"></div>

                <div className="footer">
                    <div className="emailslot"> 
                        <p>I would like to receive communications about Aesop  productions, services, stores and events and matters <br />of cultural interest.
                        </p> 
                        <input type="text" size="50" placeholder="Email address"/>
                    </div>
                    <div className="cluster">
                        <div className="footerlinks">
                            <p> <span>Contact Us</span></p>
                            <p className="folink">Contact Us
                            <br />FAQs
                            <br />Delivery and Returns
                            <br />Track your order
                            <br />Check gift card Balance
                            <br />Terms and conditions
                            <br />Accessibly</p>
                        </div>
                    
                        <div className="footerlinks">
                            <p> <span>About</span> </p>
                            <p className="folink">Our Story <br />Careers 
                            <br />Press 
                            <br />Corporate gifts 
                            <br />Facial appointments</p>
                            
                        </div>
                    
                        <div className="footerlinks">
                            <p> <span>Social</span> </p>
                            <p className="folink">Instagram ↗<br />Twitter ↗<br />Linkedin ↗</p>
                        </div>


                    </div>
                    
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