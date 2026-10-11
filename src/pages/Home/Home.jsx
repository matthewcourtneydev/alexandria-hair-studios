import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import SignatureServices from "./SignatureServices/SignatureServices";
import LookbookPreview from "./LookbookPreview/LookbookPreview";
import HairEdit from "./HairEdit/HairEdit";
import AboutPreview from "./AboutPreview/AboutPreview";
import CTA from "../../components/CTA/CTA";
import { site } from "../../data/site";

import "./Home.css";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SignatureServices />
        <Intro />
        <LookbookPreview />
        <HairEdit />
        <AboutPreview />
        <CTA
          eyebrow="YOUR NEXT APPOINTMENT"
          title="Good hair starts"
          accent="in the chair."
          description="A little refresh or a whole new look. Your next great hair day starts here."
          buttonText="Book Your Appointment"
          buttonHref={site.bookingUrl}
        />
      </main>
    </>
  );
}
