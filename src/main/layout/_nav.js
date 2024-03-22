import { Link } from "react-router-dom";
import logo from "../../assets/img/ancoraLogo.png";

export default function Nav() {
  return (
    <nav className="p-8 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 logo-img" />{" "}
          </Link>
          <span className="text-white ml-2 text-lg "></span>
        </div>
        <div className="flex items-center">{/* <Link to="/modelCreator">MODEL CREATOR</Link> */}</div>
      </div>
    </nav>
  );
}
