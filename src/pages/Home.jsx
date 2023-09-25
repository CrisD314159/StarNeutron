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
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
        <SearchAppBar />
      </section>

      <ArticleView>
        <ArticleHeader>Últimos artículos</ArticleHeader>
        <ArticleContainer>
          <ArticleElement>
            <ImageContainer />
            <ArticleElementHeader>
              Qué es exactamente una estrella de neutrones?
            </ArticleElementHeader>
            <ArticleElementContent>
              En este artículo entenderas qué es realmente una estrella de
              neutrones, un cuerpo celeste que aunque pase desapercibido, es
              realmente sorprendente.
            </ArticleElementContent>
            <Link className="link">Leer el artículo</Link>
          </ArticleElement>
        </ArticleContainer>
      </ArticleView>
    </div>
  );
};

export default Home;
