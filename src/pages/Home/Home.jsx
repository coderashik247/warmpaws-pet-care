import ExpertCard from "../../components/ExpertCard/ExpertCard";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import WinterCare from "../../components/WinterCare/WinterCare";
import Container from "../../Container/Container";
import StatsSection from "../../components/StartsSection/StartsSection";
import { useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <HeroSlider></HeroSlider>
      <Container>
        <ServiceCard data={data}></ServiceCard>
      </Container>
      <Container>
        <WinterCare></WinterCare>
        <ExpertCard></ExpertCard>
      </Container>
      <div className="mt-10 py-20 relative">
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: `url('https://i.ibb.co/mgnZYys/photo-1642906376926-acf4be23da50.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10">
          <Container>
            <StatsSection />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
