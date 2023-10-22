import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterElementContainer = styled.div`
  height: 140px;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterImg = styled.img`
  width: 150px;
`;
const FooterImgContainer = styled.div``;
const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
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
`;

const HeaderElement = styled.li`
  padding: 0 25px;
`;

const HeaderListContainer = styled.ul`
  margin-left: 100px;
  border-left: 1px solid #ccc;
`;

const Footer = () => {
  return (
    <div>
      <FooterElementContainer>
        <FooterImgContainer>
          <FooterImg src="/img/starneutron-logo.png" alt="StarNeutron" />
        </FooterImgContainer>
        <HeaderListContainer>
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
        </HeaderListContainer>
      </FooterElementContainer>
    </div>
  );
};

export default Footer;
