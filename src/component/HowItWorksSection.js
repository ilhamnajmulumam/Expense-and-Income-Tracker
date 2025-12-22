import { BBHSansBogle, robotoMono } from '@/app/ui/fonts/font';
import HowItWorksCard from './HowItWorksCard';

import {
    ChartLine,
    CircleCheckBig,
    MoveUpRight,
    NotepadText,
} from 'lucide-react';

export default function HowItWorkSection() {
    const howItWork = [
        {
            id: 1,
            icon: <NotepadText width={40} height={40} />,
            title: 'Sign Up and & Set Goal',
            description: 'Sign up and set your financial goal for the month.',
        },
        {
            id: 2,
            icon: <ChartLine width={40} height={40} />,
            title: 'Track Your Expenses',
            description:
                'Use the expense tracker to record your expenses and categorize them.',
        },
        {
            id: 3,
            icon: <MoveUpRight width={40} height={40} />,
            title: 'Analyze and Optimize',
            description:
                'Analyze your expenses and identify areas for improvement.',
        },
        {
            id: 4,
            icon: <CircleCheckBig width={40} height={40} />,
            title: 'Achieve Your Goals',
            description:
                'Set financial goals and create a budget to manage your finances effectively.',
        },
    ];

    return (
        <div className="bg-gray-200 h-min-screen flex justify-center">
            <div className="p-20 flex flex-col items-center justify-center gap-6">
                <h2 className={`${BBHSansBogle.className} text-4xl`}>
                    How It Works{' '}
                </h2>
                <p className={`${robotoMono.className}`}>
                    Getting started is easy. Follow the steps below to set up
                    your
                </p>
                <div className="flex flex-wrap justify-center">
                    {howItWork.map((item) => (
                        <HowItWorksCard
                            key={item.id}
                            id={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
