import React from 'react';
import {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YoutubeIcon,
} from 'lucide-react';
export function FooterSection() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-2xl font-bold text-emerald-400 mb-4">
                            FinTrack
                        </div>
                        <p className="text-gray-400 mb-4">
                            Take control of your finances with our powerful
                            expense and income tracking platform.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors"
                            >
                                <FacebookIcon size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors"
                            >
                                <TwitterIcon size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors"
                            >
                                <InstagramIcon size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors"
                            >
                                <YoutubeIcon size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#features"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} FinTrack. All
                            rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
