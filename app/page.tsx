import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';
import CoreCoursesSection from './components/home/CoreCoursesSection';
import WhyUsSection from './components/home/WhyUsSection';
import TeacherBioSection from './components/home/TeacherBioSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import FaqSection from './components/home/FaqSection';

export default function HomePage() {
  return (
    <main className="main-wrapper">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoreCoursesSection />
      <WhyUsSection />
      <TeacherBioSection />
      <HowItWorksSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
