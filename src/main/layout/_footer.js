import { Link } from "react-router-dom";
import devTheme from "../../core/theme";

export default function Footer({ mousePosition }) {
  const x = new Date().getFullYear();
  const foorterTextDate = String.fromCharCode(169) + " " + x;

  return (
    <div className="text-dracula-comment font-mono p-2 shadow-lg mt-4 flex justify-between  bg-gray-900 bg-opacity-10 backdrop-filter backdrop-blur-[2px]">
      <div>
        <span className="mr-4">
          <i style={{ color: devTheme.palette.secondary.main }} className="material-icons">
            {" "}
            code
          </i>{" "}
          master
        </span>

        <span className="mr-4">
          Ln <span style={{ color: devTheme.palette.secondary.main }}> {mousePosition.y} </span>, Col{" "}
          <span style={{ color: devTheme.palette.secondary.main }}>{mousePosition.x} </span>
        </span>
        <span className="mr-4">Spaces: 2</span>
        <span>UTF-8</span>
      </div>
      <div>
        <span style={{ color: devTheme.palette.secondary.main }}> {foorterTextDate} </span> - made with <i className="material-icons animate-pulse text-red-600">favorite</i>
        <span> by </span>
        <Link style={{ color: devTheme.palette.primary.main }} to="/me">
          Rivanilton Rios
        </Link>
      </div>
    </div>
  );
}
