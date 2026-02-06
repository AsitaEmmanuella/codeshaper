"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Leading from "@/components/Leading";
import CaseStudies from "@/components/CaseStudies";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Experience />
      <Leading />
      <CaseStudies />
      <Mission />
      <FAQ />
      <Testimonials />
      <Stats />
      <Footer />
    </div>
  );
}
