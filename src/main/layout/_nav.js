import { Link } from "react-router-dom";
import logo from "../../assets/img/ancoraLogo.png";

export default function Nav() {
  return (
    <nav className="p-8 mb-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center sm:justify-between items-center">
        <div className="flex items-center sm:items-start">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20  sm:h-12 logo-img" />
          </Link>
          <span className="text-white ml-2 text-lg "></span>
        </div>
        <div className="flex items-center mt-4 sm:items-center sm:mt-0">
          <Link to="/notepad">NOTEPAD</Link>
        </div>
      </div>
    </nav>
  );
}
