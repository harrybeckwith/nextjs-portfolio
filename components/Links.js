import ActiveLink from "./ActiveLink";

const Links = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Links;
