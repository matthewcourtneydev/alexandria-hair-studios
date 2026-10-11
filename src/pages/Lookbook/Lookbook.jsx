import LookbookHero from "./LookbookHero/LookbookHero";
import LookbookGallery from "./LookbookGallery/LookbookGallery";
import CTA from '../../components/CTA/CTA';
import monsteraTexture from '../../assets/textures/monstera-texture.png';
import { site } from '../../data/site';

import "./Lookbook.css";

export default function Lookbook() {
  return (
    <main className="lookbook-page">
      <LookbookHero />
      <LookbookGallery />
      <CTA
        variant="monochrome"
        image={monsteraTexture}
        imagePosition="center"
        eyebrow="YOUR NEXT LOOK AWAITS"
        title="Inspired by"
        accent="what you see?"
        description="Let's turn your inspiration into something uniquely yours. Whether you're dreaming of a fresh blonde, richer dimension, or a completely new look, your next hair chapter starts here."
        buttonText="Book Your Appointment"
        buttonHref={site.bookingUrl}
        secondaryText="New Here? Start Here"
        secondaryHref="/new-clients"
      />
    </main>
  );
}
