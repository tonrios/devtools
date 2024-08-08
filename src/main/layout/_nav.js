import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="font-mono p-2 shadow-lg">
      <ul className="flex space-x-4 ">
        <li className="hover:bg-dracula-selection p-1 rounded">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-dracula-selection p-1 rounded">
          <Link to="/notepad">Notepad</Link>
        </li>
        <li className="hover:bg-dracula-selection p-1 rounded">
          <Link to="/">Guid Generator</Link>
        </li>

        <li className="hover:bg-dracula-selection p-1 rounded">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
