import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
// import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Category></Category> */}
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;