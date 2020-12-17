import React from 'react';
import {Link} from 'react-router-dom';

function Contacts() {
    return (
        <div>
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <iframe title="OfficeAddress" style={{border: '0', width: '100%', height: '315px', frameborder: '0'}}
                                    src="https://www.google.com/maps/embed/v1/place?q=507%20Quial%20Meadow%2C%20Irvine&key=AIzaSyC_O3VVWDgdwUzC8HOu8bjxPG87e7TlBRI"
                                    allowFullScreen/>
                        </div>
                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Phone"/>
                                </div>
                                <textarea className="form-control" cols="30" rows="3" placeholder="Message"/>
                                <Link to="/" className="btn btn-outline-primary text-uppercase mt-1">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
                                    <i className="fab fa-telegram-plane" />&nbsp;Send
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts