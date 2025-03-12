"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter();

    const redirect = (link: string) => {
        router.push(link);
    }

    const toChromeWebstore = () => {
        window.open('https://chromewebstore.google.com/detail/deepseeksuper/ifakidpnjchifdpplbihnalcbdkmdgkj', '_blank');
    };

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li onClick={() => redirect("/")}><a>Home</a></li>
                        <li onClick={() => redirect("/about")}><a>About</a></li>
                        <li onClick={() => redirect("/contact")}><a>Contact</a></li>
                        <li><a onClick={() => redirect("/privacy")}>Privacy policy</a></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <img onClick={() => redirect("/")} className='w-16' src="dss-icon-380-transparent-bg.png" alt="deepseeksuper logo" />
                    <a onClick={() => redirect("/")} className="btn btn-ghost text-xl">DeepSeekSuper</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li onClick={() => redirect("/")}><a>Home</a></li>
                    <li onClick={() => redirect("/about")}><a>About</a></li>
                    <li onClick={() => redirect("/contact")}><a>Contact</a></li>
                    <li><a onClick={() => redirect("/privacy")}>Privacy policy</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={toChromeWebstore} className="btn btn-accent">Add to browser</a>
            </div>
        </div>
    )
}
