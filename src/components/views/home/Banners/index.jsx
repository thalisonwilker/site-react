import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import BannerImageOne from './img/IMG_0032.jpg'
import BannerImageTwo from './img/003.JPG'

import AudioPlayer from './player'

class Banners extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
		<AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[AwesomeSliderStyles]}
        screens={[
          {
            media: BannerImageOne,
            caption: "",
          },
		]}>
			<div>
				<img src={BannerImageOne} alt=""/>
				<h1 style={{ fontSize: 120}}>asasdsa</h1>
			</div>
			<div>
				<img src={BannerImageTwo} alt=""/>
			</div>
		</AwesomeSlider>
    );
  }
}

export default Banners;
