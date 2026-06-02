/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Welcome } from "./components/Welcome";
import { KnowJesus } from "./components/KnowJesus";
import { About } from "./components/About";
import { SpiritualJourney } from "./components/SpiritualJourney";
import { Volunteer } from "./components/Volunteer";
import { Gallery } from "./components/Gallery";
import { Courses } from "./components/Courses";
import { Schedule } from "./components/Schedule";
import { Testimonials } from "./components/Testimonials";
import { KingdomImpact } from "./components/KingdomImpact";
import { PrayerForm } from "./components/PrayerForm";
import { Donations } from "./components/Donations";
import { MembersArea } from "./components/MembersArea";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-[#fafafa] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <KnowJesus />
      <Welcome />
      <SpiritualJourney />
      <About />
      <Volunteer />
      <Gallery />
      <Courses />
      <KingdomImpact />
      <Schedule />
      <Testimonials />
      <PrayerForm />
      <Donations />
      <MembersArea />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

