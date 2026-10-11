import ServicesHero from './ServicesHero/ServicesHero';
import ServicesIntro from './ServicesIntro/ServicesIntro';
import ServiceMenu from './ServiceMenu/ServiceMenu';
import ServicesCTA from './ServicesCTA/ServicesCTA';
import ServicesFAQ from './ServicesFAQ/ServicesFAQ';

import './Services.css';

export default function Services() {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesIntro />
      <ServicesCTA />
      <ServiceMenu />
      <ServicesFAQ />
    </main>
  );
}