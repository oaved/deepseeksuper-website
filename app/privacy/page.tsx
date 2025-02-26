import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center bg-base-300 justify-center p-6 shadow-lg">
                <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-8">
                    <div className="card-body space-y-6">
                        <h2 className="card-title text-center text-3xl font-bold">Privacy Policy</h2>
                        <p className="text-center text-sm text-gray-600">Effective Date: 2025-2-9</p>

                        <div>
                            <p className="text-md font-normal">
                                We value your privacy and want to be transparent about the information we collect and how it's used.
                                In this Privacy Policy, we explain that <i><b>we do not collect or distribute any personal data</b></i> from visitors to this site.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Information We Do Not Collect</h3>
                            <ul className="list-disc pl-5 text-md space-y-2">
                                <li><strong>Personal Information</strong>: We do not collect names, email addresses, or any other personal information.</li>
                                <li><strong>Tracking</strong>: We do not use cookies, trackers, or analytics tools that gather personal data.</li>
                                <li><strong>Third-Party Sharing</strong>: We do not share, sell, or distribute any data to third parties.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Security</h3>
                            <p className="text-md">
                                Since we do not collect any personal data, we do not have to take additional steps to secure sensitive data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Changes to this Privacy Policy</h3>
                            <p className="text-md">
                                We may update this Privacy Policy from time to time. Any changes will be reflected here with an updated <b><i>Effective Date</i></b>.
                            </p>
                        </div>

                        <p className="text-center text-md">
                            If you have any questions about this policy, feel free to contact us at
                            <a href="mailto:contact@deepseeksuper.com" className="text-blue-600"> contact@deepseeksuper.com</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

