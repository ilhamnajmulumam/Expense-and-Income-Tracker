import { CTASection } from '@/component/CTASection';
import FAQSection from '@/component/FAQSection';
import FeaturesSection from '@/component/FeaturesSection';
import { FooterSection } from '@/component/FooterSection';
import HeroSection from '@/component/HeroSection';
import HowItWorkSection from '@/component/HowItWorksSection';
import PriceSection from '@/component/PriceSection';
import ReviewsSection from '@/component/ReviewsSection';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <FeaturesSection />
            <HowItWorkSection />
            <ReviewsSection />
            <PriceSection />
            <FAQSection />
            <CTASection />
            <FooterSection />
        </div>
    );
}
