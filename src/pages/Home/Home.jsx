import ExpertCard from "../../components/ExpertCard/ExpertCard";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import WinterCare from "../../components/WinterCare/WinterCare";
import Container from "../../Container/Container";
import StatsSection from "../../components/StartsSection/StartsSection";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <Container>
        <WinterCare></WinterCare>
        <ExpertCard></ExpertCard>
      </Container>
      <div
        className="mt-10 py-20"
        style={{
          backgroundImage: `url('https://i.ibb.co/mgnZYys/photo-1642906376926-acf4be23da50.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <StatsSection></StatsSection>
        </Container>
      </div>
    </div>
  );
};

export default Home;
