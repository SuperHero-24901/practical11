import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Website Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          React<span className="text-gray-900">Pages</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

      </nav>
    </header>
  );
}