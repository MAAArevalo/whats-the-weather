import { CloudSun } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { MapPin } from "lucide-react";

function Footer() {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div id="footer-content">
                            <img src="/images/logo-2.webp" alt="logo" />
                        </div>
                        <div id="footer-content">
                            <p>Weather information and 7-day forecasts for Philippine locations.</p>
                        </div>
                        <div id="footer-content">
                            <h6>Resources Used</h6>
                            <ul>
                                <li>
                                    <span><MapPin></MapPin></span>
                                    <a href="https://simplemaps.com/data/ph-cities" target="_blank">simplemaps</a>
                                    <span><ExternalLink></ExternalLink></span>
                                </li>
                                <li>
                                    <span><CloudSun></CloudSun></span>
                                    <a href="https://open-meteo.com/" target="_blank">Open Meteo</a>
                                    <span><ExternalLink></ExternalLink></span>                                
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="text-center">© 2026 What's The Weather? | Built with React</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;