import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export default function PriceSection() {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description:
                'Perfect for individuals just starting to track their finances.',
            features: [
                'Basic expense tracking',
                'Up to 3 budgets',
                'Monthly reports',
                'Mobile app access',
            ],
            notIncluded: [
                'Custom categories',
                'Data export',
                'Financial insights',
                'Priority support',
            ],
            buttonText: 'Get Started',
            buttonStyle:
                'border border-emerald-600 text-emerald-600 hover:bg-emerald-50',
        },
        {
            name: 'Premium',
            price: '$9.99',
            period: 'per month',
            description:
                'For individuals who want more control over their finances.',
            features: [
                'Unlimited expense tracking',
                'Unlimited budgets',
                'Custom categories',
                'Weekly and monthly reports',
                'Data export (CSV, PDF)',
                'Basic financial insights',
                'Email support',
            ],
            notIncluded: [],
            buttonText: 'Start Free Trial',
            buttonStyle: 'bg-emerald-600 text-white hover:bg-emerald-700',
            popular: true,
        },
        {
            name: 'Family',
            price: '$19.99',
            period: 'per month',
            description:
                'Share and manage finances with up to 5 family members.',
            features: [
                'Everything in Premium',
                'Up to 5 user accounts',
                'Shared and private expenses',
                'Family budget planning',
                'Advanced financial insights',
                'Spending patterns analysis',
                'Priority support',
            ],
            notIncluded: [],
            buttonText: 'Start Free Trial',
            buttonStyle:
                'border border-emerald-600 text-emerald-600 hover:bg-emerald-50',
        },
    ];
    return (
        <section id="pricing" className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the plan that fits your needs. All plans come
                        with a 14-day free trial.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                                plan.popular
                                    ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                                    : 'border-gray-200'
                            }`}
                        >
                            {plan.popular && (
                                <div className="bg-emerald-500 text-white text-center py-2 text-sm font-medium">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600 ml-1">
                                        /{plan.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {plan.description}
                                </p>
                                <a
                                    href="#"
                                    className={`block w-full py-3 px-4 rounded-md text-center font-medium ${plan.buttonStyle} transition-colors mb-6`}
                                >
                                    {plan.buttonText}
                                </a>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <CheckIcon
                                                size={18}
                                                className="text-emerald-500 mr-2 mt-1 flex-shrink-0"
                                            />
                                            <span className="text-gray-600">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-gray-400"
                                        >
                                            <XIcon
                                                size={18}
                                                className="text-gray-400 mr-2 mt-1 flex-shrink-0"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
