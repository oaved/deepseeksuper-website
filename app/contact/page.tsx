import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-base-100 flex flex-col items-center justify-center h-[80vh]">
                <h2 className="text-6xl font-bold mb-4">Contact Us</h2>
                <p className="mt-4 text-lg">
                    You can reach us easiest via email at <a href="mailto:contact@deepseeksuper.com" className="text-primary">contact@deepseeksuper.com</a>
                </p>
            </div>
            <Footer />
        </div>
    )
}
