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
            <section id="hero-section">
                <HeroSection />
            </section>
            <section id="features-section">
                <FeaturesSection />
            </section>
            <section id="how-it-works-section">
                <HowItWorkSection />
            </section>
            <section id="reviews-section">
                <ReviewsSection />
            </section>
            <section id="price-section">
                <PriceSection />
            </section>
            <section id="faq-section">
                <FAQSection />
            </section>
            <section id="cta-section">
                <CTASection />
            </section>
            <FooterSection />
        </div>
    );
}
