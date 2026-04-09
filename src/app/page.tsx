"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Central North Construction"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Central North Construction"
      description="Your trusted partner for quality construction, renovations, and residential projects in Parker, Texas."
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/construction-site-silhouette-sky-city-material_1127-2350.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg",
          alt: "Client A",
        },
        {
          src: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg",
          alt: "Client B",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-painting-walls-their-new-home-together_23-2149086831.jpg",
          alt: "Client C",
        },
        {
          src: "http://img.b2bpic.net/free-photo/warehouse-experts-monitoring-inventory_482257-75322.jpg",
          alt: "Client D",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-coworkers-office-with-lunch_273609-6313.jpg",
          alt: "Client E",
        },
      ]}
      avatarText="Trusted by over 500+ homeowners in Texas"
      marqueeItems={[
        {
          type: "text",
          text: "Residential Building",
        },
        {
          type: "text",
          text: "Custom Home Design",
        },
        {
          type: "text",
          text: "Renovations",
        },
        {
          type: "text",
          text: "Project Management",
        },
        {
          type: "text",
          text: "Quality Craftsmanship",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Commitment to Quality"
      description={[
        "Based in Parker, TX, Central North Construction delivers top-tier building services. With over 17 reviews averaging a 5.0 rating, we focus on integrity, precision, and excellence in every project we undertake.",
        "Whether it's custom homes or major renovations, our team is dedicated to bringing your vision to life.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Our Construction Services"
      description="Comprehensive construction and renovation solutions tailored to your specific needs."
      accordionItems={[
        {
          id: "svc1",
          title: "Residential Building",
          content: "Custom home design and construction tailored to your lifestyle.",
        },
        {
          id: "svc2",
          title: "Home Renovations",
          content: "Modernizing existing homes with expert craftsmanship and quality materials.",
        },
        {
          id: "svc3",
          title: "Project Management",
          content: "From planning to execution, we ensure every detail meets our high standards.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/low-view-construction-house_23-2148748812.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex R.",
          handle: "@customer1",
          testimonial: "Exceptional work on our home renovation project. Truly 5-star service!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg",
        },
        {
          id: "t2",
          name: "Sarah K.",
          handle: "@customer2",
          testimonial: "Very professional and communicative team. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg",
        },
        {
          id: "t3",
          name: "Mike J.",
          handle: "@customer3",
          testimonial: "The quality of work is outstanding. They delivered on time and on budget.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-painting-walls-their-new-home-together_23-2149086831.jpg",
        },
        {
          id: "t4",
          name: "Emily P.",
          handle: "@customer4",
          testimonial: "Central North Construction transformed our space beautifully. Excellent finish.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-experts-monitoring-inventory_482257-75322.jpg",
        },
        {
          id: "t5",
          name: "David W.",
          handle: "@customer5",
          testimonial: "Trustworthy, skilled, and reliable. Wouldn't choose any other construction company.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-coworkers-office-with-lunch_273609-6313.jpg",
        },
      ]}
      showRating={true}
      title="Customer Reviews"
      description="What our clients are saying about their building experience with Central North Construction."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Talk"
      title="Start Your Project"
      description="Call us today at +1 972-442-1997 or send us a message to discuss your next construction project in Parker, TX."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Central North Construction"
      leftLink={{
        text: "5970 Lindsey Ln, Parker, TX",
        href: "#",
      }}
      rightLink={{
        text: "+1 972-442-1997",
        href: "tel:+19724421997",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
