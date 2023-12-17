import styled from "styled-components";

/*Text an titles*/
export const HeaderAboutTitle = styled.h2`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 1.5;

  text-align: center;

  padding: 60px;
`;
export const HeaderAboutDescription = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
`;

/*Header stuff*/
export const MainHeader = styled.div`
  * {
    box-sizing: border-box;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(10deg, #0c414d, #0a3345, #1d8eb7, #17889d);
  background-size: 400% 400%;
  animation: gradient 20s ease-out infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

/*Content, vision, mission and rest of the about page body*/

/*Content background container*/
export const ContentContainer = styled.div`
  background-image: url("/img/neutronStar_zoomed.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(0.8);
`;

export const ContentTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.04);
`;

/*Text and body of the vision, mission, and what we do*/
export const TextComponentContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  width: 100%;
  padding: 40px 60px;
  //border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const TextComponentContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  filter: brightness(1);
  width: 100%;
  padding: 40px 60px;
  //border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TextComponentTitle = styled.p`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  margin: 0;
`;

export const TextComponentBody = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 1.5;
`;

export const CreatorNameDiv = styled.div`
  width: 100%;
  background-color: #273539;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreatorNameText = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  a {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 200;
    margin: 0;
    text-decoration: none;
  }
`;
