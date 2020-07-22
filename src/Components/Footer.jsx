import React, { Component } from 'react';
import './Styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>

                <div className="discover">
                    <div className="nashville"></div>
                    <div className="distext">
                        
                        <div className="kits">
                                <p className="dismore">Discover more</p>
                                <p className="folink">Kits & duets</p>
                                <p>Travel 
                                <br />Gift Kits 
                                <br />Skin 
                                <br />Hand & body</p>
                            </div>
                        <div className="care">
                        <p className="dismore"><br/></p>
                                <p className="folink">Hair care</p>
                                <p>
                                    Cleanse
                                    <br />Condition
                                    <br />Treat
                                    <br />Groom
                                </p>
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
                            <p className="folink"><a href="https://assistance.aesop.com/hc/en-us/requests/new">Contact Us</a>
                            <br /><a href="https://assistance.aesop.com/hc/en-us">FAQs</a>
                            <br /><a href="https://assistance.aesop.com/hc/en-us/categories/360000116135-Orders-Shipping">Delivery and Returns</a>
                            <br /><a href="http://track.aesop.com/">Track your order</a>
                            <br /><a href="https://www.aesop.com/us/r/gift-card-balance/">Check gift card Balance</a>
                            <br /><a href="https://www.aesop.com/us/r/terms/">Terms and conditions</a>
                            <br /><a href="https://www.aesop.com/us/r/accessibility/">Accessibly</a></p>
                        </div>
                        
                        <div className="footerlinks">
                            <p> <span>About</span> </p>
                            <p className="folink"><a href="https://www.aesop.com/us/r/about/">Our Story</a> 
                            <br /><a href="https://www.aesop.com/us/r/careers/">Careers</a> 
                            <br /><a href="https://www.aesop.com/us/r/contact-us/">Press</a> 
                            <br /><a href="https://www.aesop.com/us/r/corporate-gifting/">Corporate gifts</a> 
                            <br /><a href="">Facial appointments</a></p>
                            
                        </div>
                    
                        <div className="footerlinks">
                            <p> <span>Social</span> </p>
                            <p className="folink">
                                <a href="http://instagram.com/aesopskincare/">Instagram ↗</a><br />
                                <a href="https://twitter.com/aesopskincare">Twitter ↗</a><br />
                                <a href="https://www.linkedin.com/company/aesop">Linkedin ↗</a></p>
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