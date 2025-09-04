import React from "react";
import About from "./sections/about/About";
import WhatWeDo from "./sections/what-we-do/WhatWeDo";
import Entrepreneurs from "./sections/entrepreneurs/Entrepreneurs";
import Users from "./sections/users/Users";
import Models from "./models/Models";
import SiteFooter from "./Components/layout/SiteFooter";
import Hero from "./sections/hero/Hero";

export default function Page() {
  const heroVideo = {
    src: "/videos/hero-loop.mp4",
    poster: "/images/niño.png",
  };

  return (
    <main className="font-sans">
      <Hero video={heroVideo} />
      <About />
      <WhatWeDo />
      <Entrepreneurs />
      <Users />
      <Models />
      <SiteFooter />
    </main>
  );
}
