import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">FT</h1>

      <ul>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;