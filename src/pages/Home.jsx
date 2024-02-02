import "../Styled_components/home/style.css";
import {
  HomeBackgroundElement,
  Title,
  ArticleView,
  ArticleHeader,
  ArticleContainer,
  ArticleElement,
  ImageContainer,
  ArticleElementHeader,
  ArticleElementContent,
  ImgSize,
} from "../Styled_components/home";
import SearchAppBar from "../Styled_components/home/search";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


/* Home page Component*/
const Home = () => {

  /* This method puts the next page on top position*/
  const putPageOnTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSearch = (params) => {
    setSearch(params)
    setTopic("")
    
  }
  const [articles, setArticles] = useState([])
  const [topic, setTopic] = useState("")
  const [search, setSearch] = useState("")
  /* effect hook to ge all the recent articles */
  /* effect hook to get all the recent articles */
useEffect(() => {
  const getArticles = async () => {
    try {
      if (topic) {
        
        const response = await fetch(`http://localhost:1234/articles?topic=${topic}`);
        const data = await response.json();
        setArticles(data);
      } else if (search) {
        const encodedSearch = encodeURIComponent(search); // Encode the search parameter
        const response = await fetch(`http://localhost:1234/articles?search=${encodedSearch}`);
        const data = await response.json();
        setArticles(data);
      } else {
        const response = await fetch('http://localhost:1234/articles');
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      throw new Error(error)
    }
  };

  getArticles();
}, [topic, search]);
  
  return (
    <div>
      {/*Main background component*/}
      <HomeBackgroundElement>
        <Title>Bienvenid@, es un placer tenerte. Ahora, solo empieza a </Title>
        <h1>
          <span></span>
          <div className="message">
            <div className="word1">Aprender</div>
            <div className="word2">Descubrir</div>
            <div className="word3">Imaginar</div>
          </div>
        </h1>
      </HomeBackgroundElement>

      <section>
        {/*Search component*/}
        <SearchAppBar  handleSearch={handleSearch} setTopic={setTopic}/>
      </section>

      {/*Article view is the container of everything related to articles*/}
      <ArticleView>
        <ArticleHeader>Últimos artículos</ArticleHeader>
        {/*ArticleContainer contains every article*/}
        <ArticleContainer>
          {articles.map((element, key) => {
            return (
              <ArticleElement key={key}>
                <ImgSize>
               <ImageContainer src={element.article_image} />
                </ImgSize>
               
                <ArticleElementHeader>{element.article_title}</ArticleElementHeader>
                <ArticleElementContent>
                  {element.article_description}
                </ArticleElementContent>

                <Link to={`/articles/${element.id}`} onClick={putPageOnTop}>
                  <Button>Leer Artículo</Button>
                </Link>
              </ArticleElement>
            );
          })}
        </ArticleContainer>
      </ArticleView>
    </div>
  );
};

export default Home;
