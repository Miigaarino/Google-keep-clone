const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="header">
      <p>Google Keep Clone © {currentYear}</p>
    </footer>
  );
};

export default Footer;
