import { useContext, useState } from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>EstateApp</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {currentUser ?
                    (<div className='user'>
                        <img src={currentUser.avatar || '/noavatar.jpg'} alt="" />
                        <span>{currentUser.username}</span>
                        <Link to='/profile' className='profile'>
                            <div className="notification">
                                2
                            </div>
                            <span>Profile</span>
                        </Link>
                    </div>)
                    :
                    (<>
                        <a href="/login">Sign In</a>
                        <a href="/register" className='register'>Sign Up</a>
                    </>)}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/login">Sign In</a>
                    <a href="/register">Sign Up</a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;