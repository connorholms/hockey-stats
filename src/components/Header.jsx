import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img className="logo" src="src/assets/hs-logo.png" alt="Logo" />
          <span className="title">Let's Do That Hockey</span>
        </div>
      </header>
    </>
  );
}
