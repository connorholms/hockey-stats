import "./Header.css";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/">
            <img className="logo" src="src/assets/hs-logo.png" alt="Logo" />
          </Link>
          <span className="title">Let's Do That Hockey</span>
        </div>
        <nav className="header-nav">
          <span className="nav-list">
            <Link className="nav-item" to="/teams">
              Teams
            </Link>
            <Link className="nav-item" to="/players">
              Players
            </Link>
          </span>
        </nav>
      </header>
    </>
  );
}
