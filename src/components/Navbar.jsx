import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const navLinks = (
        <div className="flex flex-col lg:flex-row gap-5 justify-center text-2xl">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
            {
                user && <>
                    <Link to={'/bookings'}>My Bookings</Link>
                </>
            }
        </div>
    )

    const handleSignOut = () => {
        signOutUser()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="navbar py-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <img src={logo} alt="" className="h-12" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
                <div>
                    <a className="btn btn-outline text-orange-600">Appointment</a>
                </div>
                <div>
                    {
                        user ?
                            <>
                                <button onClick={handleSignOut} className="btn btn-outline">Sign Out</button>
                            </>
                            :
                            <>
                            <Link to={'/login'}><button className="btn btn-outline">Sign In</button></Link>
                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;