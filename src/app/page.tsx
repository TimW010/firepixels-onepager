import HeroSection from "../components/hero";
import TeamSection from "../components/team";
import Section from "../components/section";
import ConceptsSection from "../components/concepts";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamSection />
      <Section />
      <ConceptsSection />
      <Footer />
    </main>
  );
}
