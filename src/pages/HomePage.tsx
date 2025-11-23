import About from "./components/About";
import Banner from "./components/Banner";
import JoinNow from "./components/JoinNow";
import Medias from "./components/Medias";
import OurBlog from "./components/OurBlog";
import OurTeamSlider from "./components/OurTeamSlider";
import Partners from "./components/Partners";
import WhyChooseUs from "./components/WhyChooseUs";
import YearGols from "./components/YearGols";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <WhyChooseUs />
      <YearGols />
      <Partners />
      <JoinNow />
      <Medias />
      <OurTeamSlider />
      <OurBlog />
    </>
  );
};

export default HomePage;
