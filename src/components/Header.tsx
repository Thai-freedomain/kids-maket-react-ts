import clsx from 'clsx';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <div className="container-nav">
        <div className={clsx()}>
          <Link to={'/'}>Trang chủ</Link>
        </div>
        <div>
          <Link to={'/account'}>Account</Link>
        </div>
        <div>
          <Link to={'/store'}>Store</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
