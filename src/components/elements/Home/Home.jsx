/* eslint-disable react/prop-types */
import Banner from "./Banner";
import BannerCard from "./BannerCard";
import Card from "./Card";
import AuthLayouts from "../../layouts/AuthLayouts";

const Home = () => {
  return (
    <AuthLayouts type="home">
      <Banner />
      <BannerCard>
        <Card />
      </BannerCard>
    </AuthLayouts>
  );
};

export default Home;
