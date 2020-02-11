import React, {Component} from 'react';
import guitar from '../images/electric-guitar.png';

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div className="footer-row">
                <div className="footer-icon"><img src={`${guitar}`} alt="" className="gibson"/></div>
                  <div className="footer-about-section">
                    <div id="about">What it is about?</div>
                    <div id="about-desc"><b>Guitar Tabs Finder</b> allows you to search, get and present songs and guitar tabs from the <i>Songsterr</i> API database. You can search by artist or a song and filter with whatever guitar tab you're interested in. One click on the chosen tab type should redirect you to a <i>Songsterr</i> page.</div>
                  </div>
                  <div className="footer-social-media">
                    <span id="github"><a href="https://github.com/MarBbcz" alt="Github page">Github</a></span>
                    <span id="linkedin"><a href="https://pl.linkedin.com/in/marta-babulewicz" alt="Linkedin page">Linkedin</a></span>
                  </div>
                </div>
                <div id="copyright">@ 2020 Copyright</div>
              </footer>
        );
    }
}

export default Footer;