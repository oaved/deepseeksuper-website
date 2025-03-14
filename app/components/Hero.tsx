"use cient";
import React from 'react'

export default function Hero() {
    const toChromeWebstore = () => {
        window.open('https://chromewebstore.google.com/detail/deepseeksuper/ifakidpnjchifdpplbihnalcbdkmdgkj', '_blank');
    };

    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col px-20 gap-20 lg:flex-row-reverse">
                <img
                    src="dss-icon-380-transparent-bg.png"
                    className="w-full max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Organization for the superior LLM</h1>
                    <p className="py-6 text-lg">
                        Seamless Google Chrome Extension for organizing your deepseek conversations without ruining the minimalistic clean interface.
                    </p>
                    <button onClick={toChromeWebstore} className="btn btn-accent">Add to browser</button>
                </div>
            </div>
        </div>
    )
}
