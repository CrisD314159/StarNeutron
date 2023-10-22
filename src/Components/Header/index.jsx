import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

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

const Header = () => {
  return (
    <HeaderParent>
      <HeaderContainer>
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
              <Link to="/contact" className="link">
                Contacto
              </Link>
            </HeaderElement>
          </HeaderList>
        </nav>
      </HeaderContainer>
    </HeaderParent>
  );
};

export default Header;
