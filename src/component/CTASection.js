import React from 'react';
export function CTASection() {
    return (
        <section className="bg-emerald-700 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Start Your Financial Journey Today
                </h2>
                <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                    Join thousands of users who have transformed their financial
                    habits with FinTrack. Sign up today and take the first step
                    toward financial freedom.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a
                        href="#"
                        className="bg-white text-emerald-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-50 transition-colors"
                    >
                        Get Started Free
                    </a>
                    <a
                        href="#"
                        className="bg-transparent text-white border border-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors"
                    >
                        View Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
