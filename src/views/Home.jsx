import React from "react";
import Banner from "../components/Banner";
import LeftBar from "../components/LeftBar";
import Main from "../components/Main";
import RightBar from "../components/RightBar";
import Subbanner from "../components/Subbanner";

export default function Home() {
  return (
    <div className="home">
      Home
      <Banner />
      <Subbanner />
      <div className="main-bars">
        <LeftBar />
        <Main />
        <RightBar />
      </div>
    </div>
  );
}
