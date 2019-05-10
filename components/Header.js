import Links from "../components/Links.js";
import Link from "next/link";

export default function Header(props) {
  return (
    <header className={`header ${props.activeMenu ? "active-menu" : ""}`}>
      <h3 className="title__underline title--md title__sm-only header__title">
        Naomi
      </h3>
      <div className="container-fixed">
        <div className="container">
          <div className="top-bar">
            <img
              onClick={props.toggleMenu}
              className="top-bar__toggle"
              src={`${
                props.activeMenu
                  ? "/static/icons/close.svg"
                  : "/static/icons/menu.svg"
              }`}
              alt="menu-icon"
            />
            <h3 className="title__underline title--md title__md-only">
              <Link href="/"><a>title</a></Link>
            </h3>
            <div className="menu__icons">
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
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu__container">
          <nav className="menu__nav">
            <Links />
          </nav>
          <div className="menu__about">
            <div className="menu__about__inside">
              <img
                className="menu__avatar"
                src="/static/images/naomi.png"
                alt="avatar"
              />
              <h3 className="menu__title">Hi.</h3>
              <p className="menu__desc">
                Welcome to my blog. I document my adventures in travel, style,
                and food. Hope you have a nice stay!
              </p>
              <div className="menu__icons">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
