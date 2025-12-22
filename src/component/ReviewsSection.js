import { BBHSansBogle, robotoMono } from '@/app/ui/fonts/font';
import ReviewsCard from './ReviewsCard';

export default function ReviewsSection() {
    const reviews = [
        {
            star: '⭐⭐⭐⭐',
            review: "Fintrack is a game-changer for my financial management. It's user-friendly, secure, and has saved me countless hours of time. I highly recommend it to anyone looking to take control of their finances.",
            name: 'John Doe',
            position: 'CEO, XYZ Company',
        },
        {
            star: '⭐⭐⭐⭐⭐',
            review: "Fintrack has been a lifesaver for my budgeting needs. It's intuitive and easy to use, and has made my financial life so much more organized. I can't imagine my life without it.",
            name: 'Jane Smith',
            position: 'Financial Analyst, ABC Corporation',
        },
        {
            star: '⭐⭐⭐⭐⭐',
            review: "I've been using Fintrack for years and it's never let me down. It's a game-changer for my financial management and has saved me countless hours of time. I can't recommend it enough.",
            name: 'Bob Johnson',
            position: 'Sales Manager, XYZ Company',
        },
    ];

    return (
        <div className="bg-white h-min-screen w-screen p-20 flex justify-center flex-col items-center gap-3">
            <h2 className={`${BBHSansBogle.className} text-4xl font-bold`}>
                What Our Users Say
            </h2>
            <p className={`${robotoMono.className} text-xl`}>
                Read what our users have to say about Fintrack
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                {reviews.map((review, index) => (
                    <ReviewsCard
                        key={index}
                        star={review.star}
                        review={review.review}
                        name={review.name}
                        position={review.position}
                    />
                ))}
            </div>
        </div>
    );
}
