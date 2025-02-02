import Hero from '../components/Hero';
import Values from '../components/Values';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/pricing/Pricing';
import Catalog from '../components/catalog/Catalog';
import BlissExperienceCTA from '../components/BlissExperienceCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Values />
      <WhyChooseUs />
      <Pricing />
      <Catalog />
      <BlissExperienceCTA />
    </main>
  );
}