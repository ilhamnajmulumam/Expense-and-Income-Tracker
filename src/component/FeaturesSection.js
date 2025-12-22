import { BBHSansBogle, robotoMono } from '@/app/ui/fonts/font';
import { ChartLine, ChartPie, Bell, Computer, Tag, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
    const features = [
        {
            id: 1,
            logo: <ChartLine color="green" width={40} height={40} />,
            title: 'Expense Tracking',
            description:
                'Keep track of your expenses and categorize them for better organization.',
        },
        {
            id: 2,
            logo: <ChartPie color="green" width={40} height={40} />,
            title: 'Budget Planning',
            description:
                'Set financial goals and create a budget to manage your finances effectively.',
        },
        {
            id: 3,
            logo: <Bell color="green" width={40} height={40} />,
            title: 'Smart Alerts',
            description:
                'Receive alerts and notifications to stay informed about your finances.',
        },
        {
            id: 4,
            logo: <Computer color="green" width={40} height={40} />,
            title: 'Cros Platform ',
            description:
                'Access your finances from anywhere with our cross-platform app.',
        },
        {
            id: 5,
            logo: <Tag color="green" width={40} height={40} />,
            title: 'Custom Categories',
            description:
                'Create custom categories to categorize your expenses and income for better organization.',
        },
        {
            id: 6,
            logo: <Clock color="green" width={40} height={40} />,
            title: 'Recurring Expenses',
            description:
                'Set up recurring expenses to manage your finances effectively.',
        },
    ];

    return (
        <section className="w-full min-h-screen flex">
            <div className="p-10 md:p-20 flex flex-col items-center justify-center gap-6 w-full">
                <h2
                    className={`${BBHSansBogle.className} text-3xl md:text-4xl text-center`}
                >
                    Powerful Features to Manage Your Finances
                </h2>

                <p className={`${robotoMono.className} text-center max-w-xl`}>
                    Our app offers a wide range of features to help you manage
                    your finances effectively.
                </p>

                <div className="flex flex-wrap justify-center gap-6 w-full">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.logo}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
