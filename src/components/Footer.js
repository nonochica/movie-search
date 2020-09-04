import React, { Component } from 'react';
import "./Footer.css"

export class Footer extends Component {
    render () {
        return (
            <body className="body-footer">
                <footer className="footer-page">
                    <section class="ft-main">
                        <div class="ft-main-item">
                            <h2 class="ft-title">About</h2>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Services</a></li>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Portfolio</a></li>
                                    
                                </ul>
                        </div>
                        <div class="ft-main-item">
                            <h2 class="ft-title">Resources</h2>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Docs</a></li>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Blog</a></li>
                                </ul>
                        </div>
                        <div class="ft-main-item">
                            <h2 class="ft-title">Contact</h2>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Help</a></li>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Sales</a></li>
                                </ul>
                        </div>

                        <section class="ft-social">
                                <ul class="ft-social-list">
                                    <li><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/home"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://github.com/nonochica/"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                        </section>
                            

                            <section class="ft-legal">
                                <ul class="ft-legal-list">
                                <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Terms &amp; Conditions</a></li>
                                <li><a href="https://www.linkedin.com/in/antonio-chica-jimenez-19900428/">Privacy Policy</a></li>
                                <li>&copy; 2020 Copyright NoSeQueVer</li>
                                </ul>
                            </section>
                    </section>
                </footer>
            </body>
        );
    }
} 

export default Footer;