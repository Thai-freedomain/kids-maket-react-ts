import clsx from 'clsx'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
    return ( 
      <div className='container'>
        <div className='container-nav'>
            <div >
                <Link to={'/'}>
                    Trang chủ
                </Link>
            </div>
        <Link to={'/account'}>Account</Link>
        <Link to={'/store'}>Store</Link>
        </div>
                
      </div>
     );
}

export default Header;