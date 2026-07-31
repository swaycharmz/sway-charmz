import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
  <LoadingScreen />
  
      <Navbar />
      <CursorGlow />
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Videos />
      <Footer />
    </>
  );
}