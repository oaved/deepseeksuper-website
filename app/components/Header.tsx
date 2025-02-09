"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter();

    const redirect = (link: string) => {
        router.push(link);
    }

    return (
        <div className="navbar bg-neutral-200">
            <div className="flex-1">
                <img src="dss-icon-380-transparent-bg.png" alt="deepseeksuper logo" className='w-16' />
                <a className="btn btn-ghost text-3xl" onClick={() => redirect("/")}>DeepSeekSuper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a onClick={() => redirect("privacy")}>Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    )
}
