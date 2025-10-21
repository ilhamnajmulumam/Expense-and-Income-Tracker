'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export default function FAQSection() {
    const faqs = [
        {
            question: 'How secure is my financial data?',
            answer: 'Your data security is our top priority. We use bank-level encryption to protect your information. We never store your actual bank credentials, and all data is transmitted using secure SSL connections.',
        },
        {
            question: 'Can I connect my bank account?',
            answer: 'Yes, you can securely connect your bank accounts to automatically import transactions. We support over 10,000 financial institutions worldwide.',
        },
        {
            question: 'Is there a mobile app available?',
            answer: 'Yes, our mobile app is available for both iOS and Android devices. You can track expenses on the go and sync your data across all your devices.',
        },
        {
            question: 'Can I export my financial data?',
            answer: 'Premium and Family plan users can export their data in CSV or PDF formats. This is useful for tax purposes or if you want to analyze your data in other tools.',
        },
        {
            question: 'How do I cancel my subscription?',
            answer: "You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to premium features until the end of your billing period.",
        },
        {
            question: 'Do you offer refunds?',
            answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 30 days of your purchase.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Have questions? We{`&apos`}re here to help.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg"
                        >
                            <button
                                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUpIcon
                                        size={20}
                                        className="text-emerald-600"
                                    />
                                ) : (
                                    <ChevronDownIcon
                                        size={20}
                                        className="text-emerald-600"
                                    />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
