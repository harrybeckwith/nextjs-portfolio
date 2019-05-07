import Links from "../components/Links.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inside">
          <div className="footer__icons menu__icons">
            <a
              href="https://www.instagram.com/naomijoanna/?hl=en"
              target="_blank"
            >
              <img
                className="menu__icons__icon"
                src="/static/icons/instagram-logo.svg"
                alt="instagram logo"
              />
            </a>
            <a
              href="https://twitter.com/naomijowhite?lang=en-gb"
              target="_blank"
            >
              <img
                className="menu__icons__icon"
                src="/static/icons/twitter-black-shape.svg"
                alt="twitter logo"
              />
            </a>
          </div>
          <div className="footer__note">
            <p>
              <a href="https://harrybeckwith.github.io/" target="_blank">
                Created by <span className="hl">h</span>
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
