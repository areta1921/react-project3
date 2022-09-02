import logo from "../image/airbnb.webp";
import '../App.css';


const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt ="" className = "nav--logo"/>
    </nav>
  );
};

export default Navbar;
