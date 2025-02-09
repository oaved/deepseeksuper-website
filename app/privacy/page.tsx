import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-neutral-200 p-6">
                <div className="card w-full max-w-4xl bg-base-100 shadow-xl p-8">
                    <div className="card-body space-y-6">
                        <h2 className="card-title text-center text-3xl font-bold">Privacy Policy</h2>
                        <p className="text-center text-sm text-gray-600">Effective Date: 2025-2-9</p>

                        <div>
                            <p className="text-lg">
                                We value your privacy and want to be transparent about the information we collect and how it's used.
                                In this Privacy Policy, we explain that <i><b>we do not collect or distribute any personal data</b></i> from visitors to this site.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Information We Do Not Collect</h3>
                            <ul className="list-disc pl-5 text-lg space-y-2">
                                <li><strong>Personal Information</strong>: We do not collect names, email addresses, or any other personal information.</li>
                                <li><strong>Tracking</strong>: We do not use cookies, trackers, or analytics tools that gather personal data.</li>
                                <li><strong>Third-Party Sharing</strong>: We do not share, sell, or distribute any data to third parties.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Security</h3>
                            <p className="text-lg">
                                Since we do not collect any personal data, we do not have to take additional steps to secure sensitive data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Changes to this Privacy Policy</h3>
                            <p className="text-lg">
                                We may update this Privacy Policy from time to time. Any changes will be reflected here with an updated <b><i>Effective Date</i></b>.
                            </p>
                        </div>

                        {/* <p className="text-center text-lg">
                            If you have any questions about this policy, feel free to contact us at
                            <a href="mailto:yourcontact@email.com" className="text-blue-600"> yourcontact@email.com</a>.
                        </p> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}


/* 
Privacy Policy
Effective Date: [Insert Date]

We value your privacy and want to be transparent about the information we collect and how it's used. In this Privacy Policy, we explain that we do not collect or distribute any personal data from visitors to this site.

Information We Do Not Collect
Personal Information: We do not collect names, email addresses, or any other personal information.
Tracking: We do not use cookies, trackers, or analytics tools that gather personal data.
Third-Party Sharing: We do not share, sell, or distribute any data to third parties.
Security
Since we do not collect any personal data, we do not have to take additional steps to secure sensitive data.

Changes to this Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be reflected here with an updated Effective Date.

If you have any questions about this policy, feel free to contact us at [Your Contact Email].
*/