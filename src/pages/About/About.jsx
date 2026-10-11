import AboutHero from "./AboutHero/AboutHero";
import AboutIntro from "./AboutIntro/AboutIntro";
import AboutApproach from "./AboutApproach/AboutApproach";
import AboutPersonal from "./AboutPersonal/AboutPersonal";
import CTA from "../../components/CTA/CTA";
import Cherub from "../../assets/CTAImages/cherub-cta.png"
import { site } from '../../data/site';

import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutIntro />
      <AboutApproach />
      <AboutPersonal />
      <CTA
        image={Cherub}
        variant="monochrome"
        eyebrow="LET'S MAKE SOMETHING BEAUTIFUL"
        title="Your hair story"
        accent="starts here."
        description="Now that you know a little about me, I'd love to get to know you. Come have a seat, and let's create something you'll love."
        buttonText="Book Your Appointment"
        buttonHref={site.bookingUrl}
        imagePosition="center"
      />
    </main>
  );
}
