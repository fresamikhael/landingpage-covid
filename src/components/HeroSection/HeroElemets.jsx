import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  /* Add :before styles */
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const HeroH1 = styled.h1`
  color: #686868;
  font-size: 48px;
  text-align: left;
  margin-top: 190px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const BtnSembuh = styled.div`
  position: absolute;
  width: 278px;
  height: 117px;
  left: 31px;
  top: 452px;

  background: linear-gradient(97.63deg, #0ef9ee 5.36%, #20d2ca 93.74%);
  border-radius: 50px;
`;

export const BtnPositif = styled.div`
  position: absolute;
  width: 278px;
  height: 117px;
  left: 347px;
  top: 452px;
  margin-left: 50px;

  background: linear-gradient(97.63deg, #ff6d6d 5.36%, #e34545 93.74%);
  border-radius: 50px;
`;

export const BtnMeninggal = styled.div`
  position: absolute;
  width: 278px;
  height: 117px;
  left: 663px;
  top: 452px;
  margin-left: 100px;

  background: linear-gradient(97.63deg, #d3d3d3 5.36%, #acacac 93.74%);
  border-radius: 50px;
`;

export const BtnTotal = styled.div`
  position: absolute;
  width: 278px;
  height: 117px;
  left: 979px;
  top: 452px;
  margin-left: 150px;

  background: linear-gradient(97.63deg, #c1d83e 5.36%, #cfdf72 93.74%);
  border-radius: 50px;
`;

export const Traffic = styled.p`
  margin-top: 5px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgTwitter = styled.img`
  margin-top: 80px;
  margin-left: 1550px;
  width: 50px;
`;

export const ImgInstagram = styled.img`
  margin-top: 20px;
  margin-left: 1550px;
  width: 50px;
`;

export const ImgFacebook = styled.img`
  margin-top: 20px;
  margin-left: 1550px;
  width: 50px;
`;

export const FooterRed = styled.img`
  margin-top: 50px;
  width: 1688px;
`;
