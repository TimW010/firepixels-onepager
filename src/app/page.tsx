import HeroSection from "../components/hero";
import TeamSection from "../components/team";
import Footer from "../components/footer";
import Section from "../components/section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamSection />
      <Section />
      <Footer />
    </main>
  );
}
