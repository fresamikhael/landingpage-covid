import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcon,
  PeduliIcon,
} from "./NavbarElements";
import Image from "../../images/logo.png";
import Peduli from "../../images/peduli.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={Image} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Artikel Kesehatan</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Informasi Vaksin</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Layanan Publik</NavLinks>
            </NavItem>
          </NavMenu>
          <PeduliIcon src={Peduli} />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
