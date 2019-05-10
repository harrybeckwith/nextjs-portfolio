import ActiveLink from "./ActiveLink";

const Links = () => {
  return (
    <React.Fragment>
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href="/sites">
        <a>Sites</a>
      </ActiveLink>
      <ActiveLink href="/projects">
        <a>projects</a>
      </ActiveLink>
      <ActiveLink href="/gallery">
        <a>Gallery</a>
      </ActiveLink>
    </React.Fragment>
  );
};

export default Links;
