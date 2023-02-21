import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container px-6 py-3 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a className="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-700" href="#">
                            My App
                        </a>
                    </div>

                    <div className="flex items-center -mx-2">
                        <a className="mx-2 text-gray-600 hover:text-gray-800" href="#">Home</a>
                        <a className="mx-2 text-gray-600 hover:text-gray-800" href="#">Features</a>
                        <a className="mx-2 text-gray-600 hover:text-gray-800" href="#">Pricing</a>
                        <a className="mx-2 text-gray-600 hover:text-gray-800" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;