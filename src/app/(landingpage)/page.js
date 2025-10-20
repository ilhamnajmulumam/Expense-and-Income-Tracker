import FeaturesSection from '@/component/FeaturesSection';
import HeroSection from '@/component/HeroSection';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <FeaturesSection />
        </div>
    );
}
