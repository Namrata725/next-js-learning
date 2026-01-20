import FeatureadProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLunchedProducts from "@/components/landing-page/recently-luched-product";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureadProducts />
      <RecentlyLunchedProducts />
    </>
  );
}
