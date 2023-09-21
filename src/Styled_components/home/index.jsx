import styled from "styled-components";

export const HomeBackgroundElement = styled.div`
  * {
    box-sizing: border-box;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;

  height: 620px;
  background-image: url("img/Main-background.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 200;
  line-height: 1.5;
  text-transform: uppercase;
  margin: 20px 60px;
  padding: 60px;
`;

export const SearchContainer = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #262626;
`;

export const TopicsContainer = styled.div`
  width: 700px;
  height: 100;
  display: flex;
  margin-left: 100px;
  justify-content: space-evenly;
  border-left: 1px solid #cccccc;
  .link {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
  }
  .link:hover {
    text-shadow: 3px 3px 2px #fff;
  }
`;

export const ArticleView = styled.div`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ArticleHeader = styled.p`
  display: block;
  text-align: center;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 105px;
  color: #fff;
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const ArticleElement = styled.div`
  width: 40%;

  background-color: #262626;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  .link {
    font-size: 18px;
    font-weight: 100;
    color: #fff;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("img/Main-background.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
export const ArticleElementHeader = styled.h2`
  font-size: 25px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
export const ArticleElementContent = styled.h2`
  font-size: 18px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
