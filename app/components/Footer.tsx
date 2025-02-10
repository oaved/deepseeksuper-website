"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Footer() {
    const router = useRouter();

    const redirect = (link: string) => {
        router.push(link);
    }


    return (
        <div>
            <footer className="footer bg-neutral flex justify-around p-10">
                <aside>
                    <img src="/dss-icon-380-transparent-bg.png" alt="deepseeksuper logo" className='w-[10rem]' />
                </aside>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <a onClick={() => redirect("/")} className="link link-hover">Home</a>
                    <a onClick={() => redirect("privacy")} className="link link-hover">Privacy Policy</a>
                    <a onClick={() => redirect("#")} className="link link-hover">Chrome Store</a>
                </nav>
            </footer>
        </div>
    )
}
