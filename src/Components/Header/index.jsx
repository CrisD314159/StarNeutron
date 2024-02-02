import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import BasicMenu from "./BasicMenu";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const HeaderParent = styled.header`
  background-color: #212121;
  height: 91px;
`;

const HeaderImage = styled.img`
  width: 165px;
`;

const HeaderContainerImage = styled.div`
  padding: 0 70px;
  @media screen and (max-width: 720px) {
    margin: 0 auto;
    padding-right:95px ;
  }
`;

const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0 40px;
  .link {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
  }
  .link:hover {
    text-shadow: 3px 3px 4px #0ecffa;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const HeaderElement = styled.li`
  padding: 0 25px;
`;

const MenuResponsive = styled.div`
  height: 100%;
  width: 300px;
  display: none;
  @media screen and (max-width: 740px) {
    display: flex;
    align-items: center;
  }
  .menuLink{
    color: #fff;
  }
  .MuiSvgIcon-root{
    color: #fff;
  }
`

/*Header structure component*/
const Header = () => {
  return (
    <HeaderParent>
      <HeaderContainer>
        <MenuResponsive>
          <BasicMenu/>
        </MenuResponsive>
        <HeaderContainerImage>
          <Link to="/" className="link">
            <HeaderImage src="/img/starneutron-logo.png" alt="StarNeutron" />
          </Link>
        </HeaderContainerImage>
        <nav>
          <HeaderList>
            <HeaderElement>
              <Link to="/" className="link">
                Inicio
              </Link>
            </HeaderElement>
            <HeaderElement>
              <Link to="/about" className="link">
                Acerca de
              </Link>
            </HeaderElement>
            <HeaderElement>
              <Link to="https://crisdev.web.app/" className="link">
                Creator's Page
              </Link>
            </HeaderElement>
          </HeaderList>
        </nav>
      </HeaderContainer>
    </HeaderParent>
  );
};

export default Header;
