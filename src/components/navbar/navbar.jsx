import "./navbar.css";
const Navbar = () => {
    return (
<div className="navbar">
<nav className="navMenu">
      <a href="#intro">Home</a>     
      <a href="#about">About</a>
      <a href="#productList">Work</a>
      <a href="#contact">Contact</a>
      <div className="dot"></div>
    </nav>
</div>
    )
}
export default Navbar;