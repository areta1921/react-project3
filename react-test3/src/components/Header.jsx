import logo from "../image/ab.png";
const Header = () => {
  return (
    <div className="center">
      <img src={logo} width="30%" className="nav-logo" alt="" />
      <h2>Abraham Reta</h2>
      <h5>Full Stack Developer</h5>
      <p className="website">abraham.website</p>
      <div className="emails">
        <p className="ethio">Email</p>
        <p className="ethioo">Linkedin</p>
      </div>
    </div>
  );
};

export default Header;
