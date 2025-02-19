"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const redirect = (link: string) => {
    router.push(link);
  }

  return (
    <div>
      <Header />
      <Hero />

      {/* CREATE */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="dss-create-folder.png"
              alt="Create folders screenshot"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-8">
            <h2 className="text-4xl font-bold mb-4">Create folders</h2>
            <p className="text-lg">
              Easily create new folders to organize your conversations efficiently.
              Our simple interface lets you keep everything neat and accessible.
            </p>
            <button onClick={() => redirect("/about")} className="btn btn-secondary mt-6">Learn More</button>
          </div>
        </div>
      </section>

      {/* ADD */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 px-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="dss-add-to-folder.png"
              alt="Add conversations screenshot"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-8">
            <h2 className="text-4xl font-bold mb-4">Add conversations</h2>
            <p className="text-lg">
              Seamlessly add your conversations to your folders with a few clicks.
              Keep your chats organized and easy to find whenever you need them.
            </p>
            <button onClick={() => redirect("/about")} className="btn btn-secondary mt-6">Learn More</button>
          </div>
        </div>
      </section>

      {/* MANAGE */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="dss-folder-management.png"
              alt="Manage workflow screenshot"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-8">
            <h2 className="text-4xl font-bold mb-4">Manage your workflow</h2>
            <p className="text-lg">
              Stay productive by managing your folders and conversations all in one place.
              Streamline your workflow and enjoy a clutter-free digital workspace.
            </p>
            <button onClick={() => redirect("/about")} className="btn btn-secondary mt-6">Learn More</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
