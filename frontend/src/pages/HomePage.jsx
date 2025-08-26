import Hero from "../components/Hero";
import Slogan from "../components/Slogan";
import BrickSection from "../components/BrickSection";
import AboutUsSection from "../components/AboutUsSection";

const Home = () => {
  return (
    <div className="font-bn">
      <Hero />
      <Slogan />
      <BrickSection />
      <AboutUsSection />
    </div>
  );
};

export default Home;
