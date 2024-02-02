import styled from "styled-components";

/*Header and background components*/
export const ArticleBackgroundContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArticleBackgroundTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-weight: 200;
  font-size: 60px;
  text-align: center;
  backdrop-filter: blur(40px);
  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

/*Article body components*/

export const ArticleContainer = styled.div`
  padding: 60px 55px;
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    padding: 60px 10px;
  }
`;

export const ArticleBodyContainer = styled.div`
  background-color: #212121;
  width: 70%;
  display: flex;
  flex-direction: column;

  .link {
    transition: all 0.5s;
    font-family: "Poppins", sans-serif;
    color: #fff;
    text-decoration: none;

    margin: 20px 10px;
    font-weight: 200;
    font-size: 16px;
  }
  .link:hover {
    text-shadow: 3px 3px 2px #0ecffa;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const ArticleBodyElement = styled.div`
  padding: 35px 40px;
  width: 100%;
  border-bottom: 1px solid #505050;
`;

export const ArticleBodyTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 35px;
  color: #fff;
  @media screen and (max-with: 500px) {
    font-size: 30px;
  }
`;

export const ArticleBodyText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: #fff;
`;

export const ArticleBodyReference = styled.li`
list-style: circle;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: #fff;
`;
/* Stepper styles components*/
export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const StepperTitle = styled.p`
  font-family: "Montserrat", sans-serif;

  margin-bottom: 55px;
  font-weight: 100;
  font-size: 30px;
  color: #fff;
`;
export const ArticleBodyGenre = styled.p`
  font-family: "Poppins", sans-serif;

  padding-right: 5px;
  border-bottom: 1px dotted #505050;
  font-weight: 200;
  font-size: 16px;
  color: #fff;
`;



export const ArticleBackgroundLoading = styled.div`
  * {
    box-sizing: border-box;
  }
  background-color: #212121;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;