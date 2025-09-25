import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/signup');
        setIsOpen(false);
    };

    return <div className="border-b border-slate-200 flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center cursor-pointer text-2xl font-bold px-4 py-2 ">
                Medium
            </div>
        </Link>
        <div className="flex items-center space-x-4">
            <Link to={`/publish`}>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New Blog</button>
            </Link>

            {/* Avatar with dropdown */}
            <div className="relative" ref={dropdownRef}>
                <div
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Avatar size={"big"} name="User"></Avatar>
                </div>

                {/* Logout Dropdown */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center justify-center space-x-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
}