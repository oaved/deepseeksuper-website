import React from 'react'

export default function Hero() {
    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <img
                    src="dss-icon-380-transparent-bg.png"
                    className="w-full max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Organization for the superior LLM</h1>
                    <p className="py-6 text-lg">
                        Seamless Google Chrome Extension for organizing your deepseek conversations without ruining the minimalistic clean interface.
                    </p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
