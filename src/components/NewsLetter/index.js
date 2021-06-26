import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-7">
                    <h5 className="newsletter-title">Sign up to Newsletter</h5>
                    <span className="newsletter-marketing-text">...and receive <strong>$20 coupon for first shopping</strong></span>
                </div>
                <div className="col-xs-12 col-sm-5">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter your email address"/>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Sign Up</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default NewsLetter;