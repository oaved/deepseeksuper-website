"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Footer() {
    const router = useRouter();

    const redirect = (link: string) => {
        router.push(link);
    }

    const toChromeWebstore = () => {
        window.open('https://chromewebstore.google.com/detail/deepseeksuper/ifakidpnjchifdpplbihnalcbdkmdgkj', '_blank');
    };

    return (
        <div>
            <footer className="footer flex justify-around p-10 bg-base-200">
                <aside>
                    <img src="/dss-icon-380-transparent-bg.png" alt="deepseeksuper logo" className='w-[10rem]' />
                </aside>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <a onClick={() => redirect("/")} className="link link-hover">Home</a>
                    <a onClick={() => redirect("about")} className="link link-hover">About</a>
                    <a onClick={() => redirect("contact")} className="link link-hover">Contact</a>
                    <a onClick={toChromeWebstore} className="link link-hover">Chrome Web Store</a>
                    <a onClick={() => redirect("privacy")} className="link link-hover">Privacy Policy</a>
                </nav>
            </footer>
        </div>
    )
}
