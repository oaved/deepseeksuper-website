import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div>
      <Header />
      <div className="bg-base-300 p-16">
        <div className="max-w-3xl mx-auto p-8 bg-base-100 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-primary mb-4 text-center">
            Enhancing the DeepSeek Chat Experience
          </h1>
          <h2 className="text-2xl font-semibold mb-2">
            DeepSeekSuper – Enhance Your DeepSeek Chat Experience
          </h2>
          <p className="text-lg mb-6">
            DeepSeekSuper streamlines your DeepSeek Chat by letting you organize your conversations into custom folders.
            Easily create, manage, and navigate your chats with a few clicks—all integrated directly into your chat interface.
          </p>
          <div className="bg-base-100 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold mb-4">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold text-primary">Custom Folders:</span> Group chats by topic, project, or priority.</li>
              <li><span className="font-semibold text-primary">Seamless Integration:</span> Enjoy an intuitive sidebar that fits naturally into DeepSeek Chat.</li>
              <li><span className="font-semibold text-primary">Effortless Management:</span> Quickly add or remove conversations using simple dropdown menus.</li>
              <li><span className="font-semibold text-primary">Persistent Storage:</span> Your organized layout stays saved across sessions.</li>
            </ul>
          </div>
          <p className="text-lg mt-6 font-semibold">
            Transform your chat experience—install DeepSeekSuper today and keep your conversations neatly organized!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
