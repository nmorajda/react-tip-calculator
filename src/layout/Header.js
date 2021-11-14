import logo from './../images/logo.svg';

function Header() {
  return (
    <header className="header" role="banner">
      <img src={logo} alt="App Logo"></img>
    </header>
  );
}

export default Header;
