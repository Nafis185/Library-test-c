import About from "../About/About";
import Banner from "../Banner/Banner";
import CatBook from "../Book/CatBook";
import FeaturedBook from "../Book/FeaturedBook";

import TryBook from "../Book/TryBook";
import Collapse from "../Collapse/Collapse";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <FeaturedBook></FeaturedBook>
            <Collapse></Collapse>
            <TryBook></TryBook>
            <CatBook></CatBook>
           
            
        </div>
    );
};

export default Home;