import NewClientsHero from "./NewClientsHero/NewClientsHero";
import NewClientsIntro from "./NewClientsIntro/NewClientsIntro";
import NewClientsProcess from "./NewClientsProcess/NewClientsProcess";
import NewClientsPrep from "./NewClientsPrep/NewClientsPrep";
import leafTexture from "../../assets/textures/leaf-texture.png";
import CTA from '../../components/CTA/CTA';
import firstTimeCTA from "../../assets/images/first-time-cta.png";
import { site } from "../../data/site";

import "./NewClients.css";

export default function NewClients() {
  return (
    <main className="new-clients-page">
      <NewClientsHero />
      <NewClientsIntro image={leafTexture} />
      <NewClientsProcess />
      <NewClientsPrep />
      <CTA
        variant="monochrome"
        image={firstTimeCTA}
        imagePosition="center"
        eyebrow="YOUR FIRST VISIT STARTS HERE"
        title="Ready for your"
        accent="next hair chapter?"
        description="Great hair starts with a conversation. Whether you know exactly what you want or need a little guidance, I'd love to help you find your perfect look."
        buttonText="Book Your Appointment"
        buttonHref={site.bookingUrl}
        align="left"
      />
    </main>
  );
}
