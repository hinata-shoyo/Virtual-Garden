import "./navbar.css";

const Navbar = () => {
  return (
    <div className="bar">
      <div className="logo-div">
        <a href="/">
          <img
            src="/Screenshot_20240828_235811-removebg-preview.png"
            alt=""
            className="logo-div"
          />
        </a>
      </div>
      <div>
        <h2 className="home">home</h2>
        <h2 className="explore">explore</h2>
        <h2 className="contact">contact</h2>
        <h2 className="about">about us</h2>
      </div>
    </div>
  );
};

export default Navbar;
