import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userImg from '../user.png'

function Navbar() {
    const [user, setUser] = useState({ name: '', content: '', tag: '' });

    const getUserInfo = async () => {
        try {
            const response = await fetch(`https://my-diary-app-api.vercel.app/api/user/getuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('token')
                }
            });
            const jsonData = await response.json();
            setUser({
                ...user,
                name: jsonData.name,
                content: jsonData.content,
                tag: jsonData.tag
            });
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenu , setIsUserMenu] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   const toggleHandle = ()=>{
    setIsUserMenu(!isUserMenu)
   }

    const LogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="bg-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-[#48CFCB] hover:bg-[#686D76] hover:text-[#229799] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo and navigation links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0"></div>
                        <div className="hidden sm:ml-6 sm:flex space-x-4">
                            <a
                                href="/notes"
                                className="rounded-md px-3 py-2 text-xl font-medium text-[#48CFCB] hover:text-[#229799]"
                                aria-current="page"
                            >
                                Home
                            </a>
                            <a
                                href="/add-note"
                                className="rounded-md px-3 py-2 text-xl font-medium text-[#48CFCB] hover:text-[#229799]"
                            >
                                Add Notes
                            </a>
                        </div>
                    </div>

                    {/* Right-hand side icons */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <button
                                type="button"
                                className="relative px-2 flex items-center rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                id="user-menu-button"
                                aria-expanded={isMenuOpen}
                                aria-haspopup="true"
                                onClick={toggleHandle}
                            >
                                <span className="sr-only">Open user menu</span>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img
                                            src={userImg}
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white text-xl font-bold">{user?.name}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                isUserMenu && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                                        Your Profile
                                    </a>
                                    {/* <a href="/sign-in" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                                            Sign in
                                        </a>
                                        <a href="/sign-up" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                                            Sign Up
                                        </a> */}
                                    <a href="" className="block px-4 py-2 text-sm text-gray-700" onClick={LogOut} role="menuitem">
                                        Log Out
                                    </a>
                                </div>
                )
            }
            

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a
                            href="/notes"
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            HOME
                        </a>
                        <a
                            href="/add-note"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Add Notes
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
