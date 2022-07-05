import React, { useState } from "react";
import Footer from "../../components/common/footer";

import Header from "../../components/common/header";
import Delivery from "../../components/delivery";


const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    default:
      return <Delivery />;
  }
};

export default HomePage;
