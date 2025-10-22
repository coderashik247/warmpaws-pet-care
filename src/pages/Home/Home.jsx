
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import WinterCare from '../../components/WinterCare/WinterCare';
import Container from '../../Container/Container';


const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <Container>
                <WinterCare></WinterCare>
            </Container>
        </div>
    );
};

export default Home;