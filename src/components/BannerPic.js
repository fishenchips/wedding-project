import React from 'react';
import { BannerDiv, BannerImg } from "../styling/bannerPic";


function BannerPic() {
  return (
    <BannerDiv>
      <BannerImg src={require('../images/demo.jpg') }alt='Hello'/>
    </BannerDiv>
  )
}

export default BannerPic