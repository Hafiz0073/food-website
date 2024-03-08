import About from "../About/About";
import AllMenu from "../AllMenu/AllMenu";
import Blog from "../Blog/Blog";
import Brand from "../Brand/Brand";
import Contact from "../Contact/Contact";
import Promotion from "../Promotion/Promotion";
import Slide from "../Slide/Slide";

const Home = () => {
    return (
        <home id="home">
            <Slide />
            <About />
            <AllMenu />
            <Promotion />
            <Brand />
            <Blog />
            <Contact />
        </home>
    );
};

export default Home;