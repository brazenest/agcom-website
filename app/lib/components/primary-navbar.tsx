'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export const PrimaryNavbar = ({ links }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <Link href="/" className="text-lg font-semibold text-gray-800">
                        @aldengillespy / @brazenest
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="#about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>
                        <Link href="#projects" className="text-gray-700 hover:text-blue-600">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <div className="px-4 py-2 space-y-2">
                        <Link
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default PrimaryNavbar
