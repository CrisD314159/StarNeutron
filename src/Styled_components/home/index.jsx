import styled from "styled-components";

export const HomeBackgroundElement = styled.div`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;

  height: 620px;
  background-image: url("/img/Main-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen  and (max-width: 480px){
    justify-content: flex-end;
    
  }
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

  @media screen  and (max-width: 480px){
    font-size: 2.1rem;
    margin-left:0;
    
  }
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
  @media screen and (max-width: 480px) {

    width: 100%;
    border: none;
    margin: 10px auto;
    .link{
      font-size: 14px;
    }

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

/*This element contains all the elements of the article**/
export const ArticleElement = styled.div`
  width: 500px;
  height: 550px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
  padding: 10px 15px;
  .link {
    font-size: 16px;
    font-weight: 100;
    color: #fff;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
  }
  @media screen and (max-width: 860px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

/**Contains the head image of the element */
export const ImgSize = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px auto;
`
export const ImageContainer = styled.img`
  width: 100%;
`;

/**Contains the header of the article */
export const ArticleElementHeader = styled.h2`
  font-size: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

/**Contains the text element of the article */
export const ArticleElementContent = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
