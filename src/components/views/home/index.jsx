import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Banners from "./Banners";
import Calendar from "./Calendar";
import PhotoGalery from "./PhotoGalery";
import Contact from "./Contact";

import AudioPlayer from './Banners/player'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Banners />
		<AudioPlayer />
        <Calendar />
        <PhotoGalery />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
