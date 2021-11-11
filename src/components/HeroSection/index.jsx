import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  BtnSembuh,
  HeroP,
  Traffic,
  BtnPositif,
  BtnMeninggal,
  BtnTotal,
  ImgTwitter,
  ImgInstagram,
  ImgFacebook,
  FooterRed,
} from "./HeroElemets";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import ImgFooterRed from "../../images/footer.png";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroContent>
          <HeroH1>
            Perkembangan Covid-19 <br /> di Indonesia
          </HeroH1>
          <BtnSembuh>
            <HeroP>Sembuh</HeroP>
            <Traffic>4.093.795</Traffic>
          </BtnSembuh>
          <BtnPositif>
            <HeroP>Positif</HeroP>
            <Traffic>4.093.795</Traffic>
          </BtnPositif>
          <BtnMeninggal>
            <HeroP>Meninggal</HeroP>
            <Traffic>4.093.795</Traffic>
          </BtnMeninggal>
          <BtnTotal>
            <HeroP>Total Kasus</HeroP>
            <Traffic>4.093.795</Traffic>
          </BtnTotal>
          <ImgTwitter src={Twitter} />
          <ImgInstagram src={Instagram} />
          <ImgFacebook src={Facebook} />
        </HeroContent>
      </HeroContainer>
      <FooterRed src={ImgFooterRed} />
    </>
  );
};

export default HeroSection;
