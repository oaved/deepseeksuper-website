"use client";

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {

  const toChromeWebstore = () => {
    window.open('https://chromewebstore.google.com/detail/deepseeksuper/ifakidpnjchifdpplbihnalcbdkmdgkj', '_blank');
  };


  return (
    <div>
      <Header />
      <div className="bg-base-300 p-16">
        <div className="max-w-2xl mx-auto p-8 bg-base-100 rounded-lg shadow-md">
          <h2 className="text-2xl text-center mb-8 font-semibold mb-2">
            DeepSeekSuper – Enhance Your DeepSeek Chat Experience
          </h2>
          <p className="text-md mb-6">
            DeepSeekSuper streamlines your DeepSeek Chat by letting you organize your conversations into custom folders.
            Easily create, manage, and navigate your chats with a few clicks—all integrated directly into your chat interface.
          </p>
          <div className="bg-base-100 p-6 rounded-lg shadow-inner">
            <h3 className="text-lg font-bold mb-4">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Custom Folders:</span> Group chats by topic, project, or priority.</li>
              <li><span className="font-semibold">Seamless Integration:</span> Enjoy an intuitive sidebar that fits naturally into DeepSeek Chat.</li>
              <li><span className="font-semibold">Effortless Management:</span> Quickly add or remove conversations using simple dropdown menus.</li>
              <li><span className="font-semibold">Persistent Storage:</span> Your organized layout stays saved across sessions.</li>
            </ul>
          </div>
          <p className="text-md mt-6 font-semibold">
            Transform your chat experience—install DeepSeekSuper today and keep your conversations neatly organized!
          </p>
          <div className="flex justify-center mt-10">
            <button onClick={toChromeWebstore} className="btn btn-accent">Add to browser</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
