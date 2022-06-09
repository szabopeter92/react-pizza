import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar(){
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/"> Kezdőoldal </Link>
        <Link to="/menu"> Menü </Link>
        <Link to="/about"> Rólunk </Link>
        <Link to="/contact"> Kapcsolat </Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
