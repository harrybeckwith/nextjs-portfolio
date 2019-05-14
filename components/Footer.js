import Links from "../components/Links.js";
import SocialIcons from '../components/SocialIcons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inside">
          <div className="footer__icons menu__icons">
            <SocialIcons/>
          </div>
          <div className="footer__note">
            <p>
              <a href="https://harrybeckwith.github.io/" target="_blank">
                Created by <span className="hl">harry beckwith</span>
              </a>
            </p>
          </div>
          <div className="footer__links">
            <Links />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
