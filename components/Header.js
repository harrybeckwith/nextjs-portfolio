import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <header className="header">
      <div className="menu">
        <div className="menu__container">
          <nav className="menu__nav">
            <ActiveLink href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink href="/">
              <a>Travel</a>
            </ActiveLink>
            <ActiveLink href="/">
              <a>Food & drink</a>
            </ActiveLink>
            <ActiveLink href="/">
              <a>Style</a>
            </ActiveLink>
            <ActiveLink href="/about">
              <a>About</a>
            </ActiveLink>
            <ActiveLink href="/blog">
              <a>Blog</a>
            </ActiveLink>
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
