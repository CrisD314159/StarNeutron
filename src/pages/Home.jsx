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
} from "../Styled_components/home";
import SearchAppBar from "../Styled_components/home/search";
import { articles } from "../articles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

/* Home page Component*/
const Home = () => {
  const putPageOnTop = () => {
    window.scrollTo(0, 0);
  };
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
        <SearchAppBar />
      </section>

      {/*Article view is the container of everything related to articles*/}
      <ArticleView>
        <ArticleHeader>Últimos artículos</ArticleHeader>
        {/*ArticleContainer contains every article*/}
        <ArticleContainer>
          {articles.map((element, key) => {
            return (
              <ArticleElement key={key}>
                <ImageContainer src={element.image} />
                <ArticleElementHeader>{element.title}</ArticleElementHeader>
                <ArticleElementContent>
                  {element.description}
                </ArticleElementContent>

                <Link to={`/Article/${element.token}`} onClick={putPageOnTop}>
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
