import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Categories } from "@/components/sections/categories";
import { Featured } from "@/components/sections/featured";
import { Philosophy } from "@/components/sections/philosophy";
import { Sustainability } from "@/components/sections/sustainability";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Featured />
        <Philosophy />
        <Sustainability />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
