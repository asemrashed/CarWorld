import Hero from "@/components/Hero";
import Category from "@/components/Category";
import LatestArrivals from "@/components/LatestArrivals";
import BestThisMonth from "@/components/BestThisMonth";
import HowWorks from "@/components/HowWorks";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <LatestArrivals />
      <BestThisMonth />
      <HowWorks />
      <Reviews />
    </>
  );
}
