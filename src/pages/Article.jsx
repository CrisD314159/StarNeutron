import { Link, useParams } from "react-router-dom";
import {
  ArticleContainer,
  ArticleBackgroundContainer,
  ArticleBackgroundTitle,
  ArticleBodyContainer,
  ArticleBodyElement,
  ArticleBodyText,
  ArticleBodyTitle,
  StepperContainer,
  StepperTitle,
  ArticleBodyGenre,
} from "../Styled_components/Article";
import VerticalLinearStepper from "../Styled_components/Article/stepper";
import { articles } from "../articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.filter((element) => element.token === id);
  const articleBody = article[0].body;

  console.log(article);
  return (
    <div>
      <ArticleBackgroundContainer background={article[0].image}>
        <ArticleBackgroundTitle>{article[0].title}</ArticleBackgroundTitle>
      </ArticleBackgroundContainer>
      <ArticleContainer>
        <StepperContainer>
          <StepperTitle>Good-To-Know</StepperTitle>
          <VerticalLinearStepper goodies={article[0].goodies} />
        </StepperContainer>
        <ArticleBodyContainer>
          <ArticleBodyGenre>{article[0].genre.toUpperCase()}</ArticleBodyGenre>
          {articleBody.map((element, key) => {
            return (
              <ArticleBodyElement key={key}>
                <ArticleBodyTitle>{element.title}</ArticleBodyTitle>
                <ArticleBodyText>{element.body}</ArticleBodyText>
              </ArticleBodyElement>
            );
          })}
          <Link to={"../"} className="link">
            {"<<<"}Volver a inicio
          </Link>
        </ArticleBodyContainer>
      </ArticleContainer>
    </div>
  );
};

export default Article;
