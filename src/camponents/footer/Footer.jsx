import React from 'react';
import './footer.css'

function Footer(props) {
    return (
        <>
            <div className="back-top tdn text-center py-1" style={{background: '#37475A'}}><a href="#header" style={{textDecoration:'none', color:'#fff'}} >Back to top</a></div>
            <div className="footer_info">
                <div className="content_footer">
                    <div className="w-25">
                        <h3>Get to Know Us</h3>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>About Amazon</p>
                        <p>Investor Relations</p>
                        <p>Amazon Devices</p>
                        <p>Amazon Science</p>
                    </div>
                    <div className="w-25">
                        <h3>Make Money with Us</h3>
                        <p>Sell products on Amazon</p>
                        <p>Sell on Amazon Business</p>
                        <p>Sell apps on Amazon</p>
                        <p>Become an Affiliate</p>
                        <p>Advertise Your Products</p>
                        <p>Self-Publish with Us</p>
                        <p>Host an Amazon Hub</p>
                        <p>›See More Make Money with Us</p>
                        
                    </div>
                    <div className="w-25">
                        <h3>Amazon Payment Products</h3>
                        <p>Amazon Business Card</p>
                        <p>Shop with Points</p>
                        <p>Reload Your Balance</p>
                        <p>Amazon Currency Converter</p>
                    </div>
                    <div className="w-25">
                        <h3>Let Us Help You</h3>
                        <p>Amazon and COVID-19</p>
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Returns & Replacements</p>
                        <p>Manage Your Content and Devices</p>
                        <p>Help</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;