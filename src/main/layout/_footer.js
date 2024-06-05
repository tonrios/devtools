import { Link } from "react-router-dom";
import devTheme from "../../core/theme";

export default function Footer() {
  const x = new Date().getFullYear();
  const foorterTextDate = String.fromCharCode(169) + " " + x;

  return (
    <footer className="footer text-center  sm:text-right p-9 pb-4">
      <span style={{ color: devTheme.palette.secondary.main }}> {foorterTextDate} </span> - made with <i className="material-icons animate-pulse text-red-600">favorite</i>
      <span> by </span>
      <Link style={{ color: devTheme.palette.primary.main }} to="/me">
        Rivanilton Rios
      </Link>
    </footer>
  );
}
