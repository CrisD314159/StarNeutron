import styled from "styled-components";

/*Header and background components*/
export const ArticleBackgroundContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: cover;
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
`;

/*Article body components*/

export const ArticleContainer = styled.div`
  padding: 60px 55px;
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
`;

export const ArticleBodyContainer = styled.div`
  background-color: #212121;
  width: 70%;
  display: flex;
  flex-direction: column;
  .link {
    font-family: "Poppins", sans-serif;
    color: #fff;
    text-decoration: none;

    margin: 20px 10px;
    font-weight: 200;
    font-size: 16px;
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
`;

export const ArticleBodyText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 16px;
  color: #fff;
`;

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
